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
  return (arg0.$classData.Z ? arg0.i() : $objectClone(arg0));
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
        return null.s2();
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
        return instance.r();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.r.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.s3(x0);
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
$p.r = (function() {
  return $systemIdentityHashCode(this);
});
$p.k = (function(that) {
  return (this === that);
});
$p.v = (function() {
  var i = this.r();
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
$p.w = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.i = (function() {
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
$p.w = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.i = (function() {
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
$p.w = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.i = (function() {
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
$p.w = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.i = (function() {
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
$p.w = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.i = (function() {
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
$p.w = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.i = (function() {
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
$p.w = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.i = (function() {
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
$p.w = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.i = (function() {
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
$p.w = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.i = (function() {
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
  $p.w = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.i = (function() {
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
  $m_LMain$().qs(args);
}
function $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector($thiz, sel, stage) {
  return $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O(sel.bW.eo, new $c_LMain$$anon$2(stage, sel, $thiz));
}
function $p_LMain$__newSection$lzyINIT1$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$1, hideInCompact$1, sectionName$1, rulesDiv$1) {
  if ((newSection$lzy1$1 === null)) {
    throw new $c_jl_NullPointerException();
  }
  return (newSection$lzy1$1.gO ? newSection$lzy1$1.gP : newSection$lzy1$1.qi((hideInCompact$1 ? $m_Lcom_raquo_laminar_api_package$().s.dN().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().s.h6().gV($thiz.en), $m_Lcom_raquo_laminar_api_package$().s.dY.eL(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().s, $m_sci_Vector$().bc($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().s.nI().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().s, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))) : $m_Lcom_raquo_laminar_api_package$().s.dN().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().s.dY.eL(sectionName$1), $m_Lcom_raquo_laminar_api_package$().s.dN().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().s.dY.eL(sectionName$1), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().s, $m_sci_Vector$().bc($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)([$m_Lcom_raquo_laminar_api_package$().s.nI().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().s.pU().iN(new $c_Lcom_raquo_airstream_misc_MapSignal($thiz.en, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => ((!(!_$4)) ? "0.5rem" : "1rem"))), $m_s_None$()), $m_s_$less$colon$less$().gC), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().s, sectionName$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)]))), rulesDiv$1]))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])))]))))));
}
function $p_LMain$__newSection$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2) {
  return (newSection$lzy1$2.gO ? newSection$lzy1$2.gP : $p_LMain$__newSection$lzyINIT1$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($thiz, newSection$lzy1$2, hideInCompact$2, sectionName$2, rulesDiv$2));
}
/** @constructor */
function $c_LMain$() {
  this.gf = null;
  this.gg = null;
  this.hj = null;
  this.en = null;
  $n_LMain$ = this;
  this.gf = $m_Lcom_raquo_laminar_api_package$().s.hG.mZ(new $c_LMain$AdversarySelector($m_Ladversaries_Adversary$().hm, 6));
  this.gg = this.gf.fg;
  this.hj = $m_Lcom_raquo_laminar_api_package$().s.hG.mZ(false);
  this.en = this.hj.fg;
}
$p = $c_LMain$.prototype = new $h_O();
$p.constructor = $c_LMain$;
/** @constructor */
function $h_LMain$() {
}
$h_LMain$.prototype = $p;
$p.qs = (function(args) {
  var container = document.getElementById("app");
  var this$3 = $m_Lcom_raquo_laminar_api_package$().s;
  var container$1 = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => container));
  var rootNode = new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.pv()));
  var p = $m_Lcom_raquo_laminar_keys_EventProcessor$().h3(this$3.l0.qP(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().ph(document, p.dZ.fn, p.fm), p.fl), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container$1.T(), rootNode.T());
  })), this$3.rv());
});
$p.pv = (function() {
  return $m_Lcom_raquo_laminar_api_package$().s.dN().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().s.qc().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().s.h6().gV(this.en), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().s, "Spirit Island Adversary Tool", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)]))), this.r4(), this.r3(), this.r2()])));
});
$p.r4 = (function() {
  var $x_6 = $m_Lcom_raquo_laminar_api_package$().s.dN();
  var $x_5 = $m_sr_ScalaRunTime$();
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().s.dY.eL("levelSelector");
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().s.h6().gV(this.en);
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().s.nH().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().s, "Level", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)])));
  var $x_1 = $m_Lcom_raquo_laminar_api_package$().s;
  var b = $m_sci_IndexedSeq$().aV();
  var it = new $c_sci_RangeIterator(1, 1, 6, false);
  while (it.dr) {
    var x0 = it.nS();
    b.aU($m_Lcom_raquo_laminar_api_package$().s.nc().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().s, ("" + x0), $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().h3($m_Lcom_raquo_laminar_api_package$().s.ha(), false, false)).nQ(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((x0) => (() => x0))(x0))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1$1) => {
      sink.eV(_$1$1);
    }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.gf, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((x0) => ((a, _$1) => new $c_LMain$AdversarySelector(a.bW, x0)))(x0)))))), $m_Lcom_raquo_laminar_api_package$().s.nb().iN(new $c_Lcom_raquo_airstream_misc_MapSignal(this.gg, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x0) => ((selected) => ((selected.bB === x0) ? "lightblue" : "")))(x0)), $m_s_None$()), $m_s_$less$colon$less$().gC)]))));
  }
  return $x_6.bp($x_5.A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $x_2, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, b.ba(), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.r3 = (function() {
  var $x_7 = $m_Lcom_raquo_laminar_api_package$().s.dN();
  var $x_6 = $m_sr_ScalaRunTime$();
  var $x_5 = $m_Lcom_raquo_laminar_api_package$().s.dY.eL("adversarySelector");
  var $x_4 = $m_Lcom_raquo_laminar_api_package$().s.h6().gV(this.en);
  var $x_3 = $m_Lcom_raquo_laminar_api_package$().s.nH().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().s, "Adversary", $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)])));
  var $x_2 = $m_Lcom_raquo_laminar_api_package$().s;
  var this$10 = $m_Ladversaries_Adversary$().jI;
  var f = ((adversary) => $m_Lcom_raquo_laminar_api_package$().s.nc().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().s, adversary.f8, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().h3($m_Lcom_raquo_laminar_api_package$().s.ha(), false, false)).nQ(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Lcom_raquo_laminar_api_package$().s.qe()))), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.eV(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.gf, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((adversary$2) => ((a, _$2) => new $c_LMain$AdversarySelector(adversary$2, a.bB)))(adversary)))))), $m_Lcom_raquo_laminar_api_package$().s.nb().iN(new $c_Lcom_raquo_airstream_misc_MapSignal(this.gg, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((adversary$3) => ((selected) => {
    var x = selected.bW;
    if (((x === null) ? (adversary$3 === null) : x.k(adversary$3))) {
      return "lightblue";
    } else {
      return "";
    }
  }))(adversary)), $m_s_None$()), $m_s_$less$colon$less$().gC)]))));
  if ((this$10 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0 = this$10.u();
    var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
    var t = h;
    var rest = this$10.x();
    while ((rest !== $m_sci_Nil$())) {
      var x0$1 = rest.u();
      var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
      t.aM = nx;
      t = nx;
      rest = rest.x();
    }
    var $x_1 = h;
  }
  return $x_7.bp($x_6.A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_5, $x_4, $x_3, $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
});
$p.r2 = (function() {
  return $m_Lcom_raquo_laminar_api_package$().s.dN().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().h3($m_Lcom_raquo_laminar_api_package$().s.ha(), false, false)).qw((void 0)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.eV(_$1);
  }))($f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this.hj, new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((isHidden, _$3) => (!(!(!isHidden))))))))), $m_Lcom_raquo_laminar_api_package$().s.rp().oS("Click for toggling compact view!"), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().pd(new $c_Lcom_raquo_airstream_misc_MapSignal(this.gg, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sel) => {
    var escalation = sel.bW.f5;
    var setup = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage());
    var afterRavage = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage());
    var ravage = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage());
    var afterBuild = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage());
    var highImmigration = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage());
    var build = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Build__Ladversaries_Stage());
    var explore = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage()).dJ(("Stage 2 Escalation: " + escalation));
    var lossCondition = sel.bW.f7;
    var ruleChanges = $p_LMain$__findRules__LMain$AdversarySelector__Ladversaries_Stage__sci_Vector(this, sel, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage());
    var deckOrder = $f_sc_IndexedSeqOps__reverse__O(sel.bW.eo).gZ(new $c_LMain$$anon$1(sel));
    var fear = $f_sc_LinearSeqOps__apply__I__O(sel.bW.f6, (((-1) + sel.bB) | 0));
    var setupWithDeckNFear = $m_sci_Vector$().bc($m_sr_ScalaRunTime$().A(new ($d_T.r().C)([("Deck Order: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Option$().nZ(deckOrder), "", "", "")), ("Fear: " + fear)]))).pc(setup);
    return this.cW(this.cW(this.cW(this.cW(this.cW(this.cW(this.cW(this.cW(this.cW($m_sci_Vector$().bc($m_sr_ScalaRunTime$().q2(new ($d_sr_Nothing$.r().C)([]))), setupWithDeckNFear, "Setup", true), $m_s_Option$().nZ(lossCondition).jE(), "Loss Condition", false), ruleChanges, "Rule Changes", false), highImmigration, "High Immigration", false), ravage, "Ravage", false), afterRavage, "After Ravage", false), build, "Build", false), afterBuild, "After Build", false), explore, "Explore", false);
  })), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().lJ, (void 0)))])));
});
$p.cW = (function(vec, rules, sectionName, hideInCompact) {
  var newSection$lzy1 = new $c_sr_LazyRef();
  var rulesDiv = $m_Lcom_raquo_laminar_api_package$().s.dN().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$m_Lcom_raquo_laminar_api_package$().s.dY.eL("rules"), $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($m_Lcom_raquo_laminar_api_package$().s, rules.eh(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s) => $m_Lcom_raquo_laminar_api_package$().s.qS().bp($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().s, s, $m_Lcom_raquo_laminar_modifiers_RenderableText$().cH)])))))), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
  return ((!$f_sc_SeqOps__isEmpty__Z(rules)) ? vec.dJ($p_LMain$__newSection$1__sr_LazyRef__Z__T__Lcom_raquo_laminar_nodes_ReactiveHtmlElement__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, newSection$lzy1, hideInCompact, sectionName, rulesDiv)) : vec);
});
var $d_LMain$ = new $TypeData().i($c_LMain$, "Main$", ({
  cx: 1
}));
var $n_LMain$;
function $m_LMain$() {
  if ((!$n_LMain$)) {
    $n_LMain$ = new $c_LMain$();
  }
  return $n_LMain$;
}
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  aB: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).jg() + "@") + $thiz.r());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.ej();
  return ((x === (void 0)) ? $thiz.ee() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().oo(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))), $m_s_PartialFunction$().gE, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.oo = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.nG = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  cJ: 1
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
$p.o9 = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  cM: 1
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
  this.er = 0;
  this.er = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.nU = (function() {
  if ((this.er === 2147483647)) {
    this.er = 1;
  } else {
    this.er = ((1 + this.er) | 0);
  }
  return this.er;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  cN: 1
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
  this.hr = null;
  this.jX = null;
  this.hs = 0;
  this.hr = code;
  this.jX = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().ga();
  this.hs = ((x === (void 0)) ? 1 : ((1 + x.hs) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().gh === (-1)) || (this.hs > $m_Lcom_raquo_airstream_core_Transaction$().gh))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().ce(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().gh));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bg) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().dV.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().iQ(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  cO: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.gh = 0;
  this.jY = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.gh = 1000;
  this.jY = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.nf = (function(transaction) {
  try {
    transaction.hr.e(transaction);
    var x = transaction.jX;
    if ((x !== (void 0))) {
      while (x.s7()) {
        x.rV().sb(transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().ce(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  cP: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.gi.length | 0) === 0)) {
    if ((($thiz.dV.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
        while ((($thiz.dV.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().iQ($thiz.dV.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
      while ((($thiz.gi.length | 0) > 0)) {
        var callback = $thiz.gi.shift();
        try {
          callback.e(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().ce(e$2);
        }
      }
      while ((($thiz.dV.length | 0) > 0)) {
        var _trx = $thiz.dV.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().iQ(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bg = false;
  this.gi = null;
  this.dV = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bg = false;
  this.gi = $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_F1.r().C)([])));
  this.dV = $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  cQ: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.dW.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.gj.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.gj.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.dW.set(parent, newChildren);
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
      (!(!$thiz.dW.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.gj = null;
  this.dW = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.gj = $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.dW = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.iQ = (function(newTransaction) {
  var x = this.ga();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().nf(newTransaction);
    this.pK(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.pK = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.ga();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().p(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.qT(transaction$tailLocal1);
    transaction$tailLocal1.hr = $m_Lcom_raquo_airstream_core_Transaction$().jY;
    var maybeNextTransaction = this.ga();
    if ($m_sr_BoxesRunTime$().p(maybeNextTransaction, (void 0))) {
      if (((this.dW.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.dW.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.aF + (transactions.length | 0)) | 0);
          numChildren.aF = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.aF) + " children for ") + (this.dW.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().nf(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.qT = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().p(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.ga();
      if ((!$m_sr_BoxesRunTime$().p(maybeParentTransaction, (void 0)))) {
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
$p.ga = (function() {
  return this.gj[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  cR: 1
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
  this.k2 = null;
  this.k0 = null;
  this.k1 = null;
  this.k2 = onWillStart;
  this.k0 = onStart;
  this.k1 = onStop;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $p;
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  cU: 1
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
$p.pi = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  cV: 1
}));
var $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
function $m_Lcom_raquo_airstream_custom_CustomSource$Config$() {
  if ((!$n_Lcom_raquo_airstream_custom_CustomSource$Config$)) {
    $n_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $c_Lcom_raquo_airstream_custom_CustomSource$Config$();
  }
  return $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.d5.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.d5.splice(index, 1);
    if ((!$thiz.bK.d())) {
      subscription.nX();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.go.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.go.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.kp = null;
  this.d5 = null;
  this.es = false;
  this.go = null;
  this.bK = null;
  this.et = 0;
  this.kp = onAccessAfterKilled;
  this.d5 = $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.es = true;
  this.go = $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.bK = $m_s_None$();
  this.et = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.mO = (function() {
  if ((!(!this.bK.d()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.kp);
      this.bK = new $c_s_Some(newOwner);
      this.es = false;
      this.et = 0;
      var i = 0;
      var originalNumSubs = (this.d5.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.et) | 0);
        this.d5[ix].nW(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.es = true;
      this.et = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.bg || (!when))) {
      f();
    } else {
      this$4.bg = true;
      try {
        f();
      } finally {
        this$4.bg = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.pF = (function() {
  if ((!this.bK.d())) {
    this.es = false;
    var arr = this.d5;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].nX();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.bK;
    if ((!this$4.d())) {
      this$4.O().nO();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.es = true;
    this.bK = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.p9 = (function(subscription, prepend) {
  if (prepend) {
    this.et = ((1 + this.et) | 0);
    this.d5.unshift(subscription);
  } else {
    this.d5.push(subscription);
  }
  var this$1 = this.bK;
  if ((!this$1.d())) {
    var x0 = this$1.O();
    subscription.nW(x0);
  }
});
$p.r0 = (function(subscription) {
  if (this.es) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.go.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  cZ: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.gp = null;
  this.kq = null;
  this.gq = null;
  this.gp = dynamicOwner;
  this.kq = activate;
  this.gq = $m_s_None$();
  dynamicOwner.p9(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.h7 = (function() {
  this.gp.r0(this);
});
$p.nW = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.gq = this.kq.e(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bg || (!when))) {
    f();
  } else {
    this$2.bg = true;
    try {
      f();
    } finally {
      this$2.bg = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.nX = (function() {
  var this$1 = this.gq;
  if ((!this$1.d())) {
    this$1.O().h7();
    this.gq = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  d0: 1
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
$p.gd = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => new $c_s_Some(activate.e(owner)))), prepend);
});
$p.oi = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => {
    activate.e(owner);
    return $m_s_None$();
  })), prepend);
});
$p.ri = (function(dynamicOwner, observable, onNext) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gd(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(observable, onNext, owner))), false);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  d1: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.ng($m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.eZ();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.eZ().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.eZ().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.eZ().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.eZ().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.hz)) {
    $thiz.kt.T();
    $thiz.hz = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.ku = null;
  this.kt = null;
  this.hz = false;
  this.ku = owner;
  this.kt = cleanup;
  this.hz = false;
  owner.o4(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.h7 = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.ku, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  d3: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.kv = null;
  this.kw = null;
  this.d6 = null;
  this.dX = false;
  this.kv = activate;
  this.kw = deactivate;
  this.d6 = $m_s_None$();
  this.dX = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.qn = (function() {
  var this$1 = this.d6;
  return ((!this$1.d()) && (!this$1.O().gp.bK.d()));
});
$p.re = (function(nextOwner) {
  if (this.dX) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.d6;
  if ((!this$1.d())) {
    var x0 = this$1.O();
    var x$2 = x0.gp;
    var $x_1 = (nextOwner === x$2);
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.qn() && (!nextOwner.bK.d()))) {
      this.dX = true;
    }
    var this$3 = this.d6;
    if ((!this$3.d())) {
      this$3.O().h7();
      this.d6 = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gd(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((parentOwner) => {
      if ((!this.dX)) {
        this.kv.T();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        if ((!this.dX)) {
          this.kw.T();
        }
      })));
    })), false);
    this.d6 = new $c_s_Some(newPilotSubscription);
    this.dX = false;
  }
});
$p.ps = (function() {
  if (this.dX) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.d6;
  if ((!this$1.d())) {
    this$1.O().h7();
  }
  this.d6 = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  d4: 1
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
$p.mZ = (function(initial) {
  return new $c_Lcom_raquo_airstream_state_SourceVar(new $c_s_util_Success(initial));
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  d8: 1
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
$p.ph = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().nE(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().pi(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().i($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  dc: 1
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
$p.bo = (function(items) {
  return [...$m_sjsr_Compat$().rq(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  dd: 1
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
$p.qf = (function(this$, item, fromIndex) {
  return ((this$.indexOf(item, fromIndex) | 0) !== (-1));
});
$p.pV = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  de: 1
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
  this.kI = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.pD($m_Lcom_raquo_laminar_api_package$().s.rk().rl());
  this.kI = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.pb = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ax instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
  }
});
$p.qX = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ax instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
  }
});
$p.qk = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ax instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
  }
});
$p.qj = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.ax instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
  }
});
$p.qq = (function(node, ancestor) {
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
    if ($m_sr_BoxesRunTime$().p(ancestor, effectiveParentNode)) {
      return true;
    }
    node$tailLocal1 = effectiveParentNode;
  }
});
$p.oZ = (function(element, listener) {
  element.addEventListener(listener.ev.dZ.fn, listener.hR, listener.hS);
});
$p.qY = (function(element, listener) {
  element.removeEventListener(listener.ev.dZ.fn, listener.hR, listener.hS);
});
$p.pC = (function(tag) {
  return document.createElement(tag.hZ);
});
$p.q5 = (function(element, attr) {
  var x = this.q6(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.hL.j2(x));
});
$p.q6 = (function(element, attr) {
  var domValue = element.bh.getAttributeNS(null, attr.fo);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.rc = (function(element, attr, value) {
  this.rd(element, attr, attr.hL.g0(value));
});
$p.rd = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.qZ(element, attr);
  } else {
    element.bh.setAttribute(attr.fo, domValue);
  }
});
$p.qZ = (function(element, attr) {
  element.bh.removeAttribute(attr.fo);
});
$p.q7 = (function(element, prop) {
  return element.bh[prop.cG];
});
$p.of = (function(element, prop, value) {
  this.og(element, prop, prop.hM.g0(value));
});
$p.og = (function(element, prop, value) {
  element.bh[prop.cG] = value;
});
$p.rb = (function(element, style, value) {
  var ref = element.bh;
  var styleCssName = style.gu;
  var prefixes = style.gv;
  var styleValue = ((value === null) ? null : $dp_toString__T(value));
  if ((styleValue === null)) {
    prefixes.az(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.az(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.pD = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.lQ);
});
$p.qa = (function(element, attr) {
  var x = this.qb(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.hN.j2(x));
});
$p.qb = (function(element, attr) {
  var $x_2 = element.jA();
  var this$2 = attr.gx;
  var $x_1 = $x_2.getAttributeNS((this$2.d() ? null : this$2.O()), attr.hO);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.rf = (function(element, attr, value) {
  this.rg(element, attr, attr.hN.g0(value));
});
$p.rg = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.r1(element, attr);
  } else {
    var this$1 = attr.gx;
    if (this$1.d()) {
      element.jA().setAttribute(attr.gw, domValue);
    } else {
      var x0 = this$1.O();
      element.jA().setAttributeNS(x0, attr.gw, domValue);
    }
  }
});
$p.r1 = (function(element, attr) {
  var $x_1 = element.jA();
  var this$2 = attr.gx;
  $x_1.removeAttributeNS((this$2.d() ? null : this$2.O()), attr.hO);
});
$p.pB = (function(text) {
  return document.createComment(text);
});
$p.pE = (function(text) {
  return document.createTextNode(text);
});
$p.qo = (function(element) {
  return $m_sc_StringOps$().pu(element.tagName, 45);
});
$p.pH = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.nk(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.nk = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if ((id !== "")) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = ((classes !== "") ? ("." + classes.replace(this.kI, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.pG = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  df: 1
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
  this.hF = null;
  this.kJ = null;
  this.hE = null;
  this.hF = seq;
  this.kJ = scalaArray;
  this.hE = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.az = (function(f) {
  if ((this.hF !== null)) {
    this.hF.az(f);
  } else if ((this.hE !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().pV(this.hE, $m_sjs_js_Any$().nE(f));
  } else {
    $m_sc_ArrayOps$().pW(this.kJ, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  dg: 1
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
  dh: 1
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
  $thiz.hG = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.or = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    _$1.lA.bh.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cf.bK.d()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      if (ignoreNextActivation.gN) {
        var ev$5 = false;
        ignoreNextActivation.gN = ev$5;
      } else {
        fn.e(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().oi(element.cf, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((owner) => {
      activate.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.fh = null;
  this.hH = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.fh = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  this.hH = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  ds: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.kX = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.dY = $thiz.kX;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().fh);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.fo, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().q5(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().rc(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.oq = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().fh, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.gw, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().qa(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().rf(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inputs_InputController$() {
  this.lt = null;
  $n_Lcom_raquo_laminar_inputs_InputController$ = this;
  $m_Lcom_raquo_laminar_api_package$().s.on();
  $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().s.jx()])));
  $m_Lcom_raquo_laminar_api_package$().s.on();
  $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().s.jx(), $m_Lcom_raquo_laminar_api_package$().s.qO()])));
  $m_Lcom_raquo_laminar_api_package$().s.pq();
  $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_keys_EventProp.r().C)([$m_Lcom_raquo_laminar_api_package$().s.jx(), $m_Lcom_raquo_laminar_api_package$().s.ha()])));
  this.lt = $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["value", "checked"])));
}
$p = $c_Lcom_raquo_laminar_inputs_InputController$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inputs_InputController$;
/** @constructor */
function $h_Lcom_raquo_laminar_inputs_InputController$() {
}
$h_Lcom_raquo_laminar_inputs_InputController$.prototype = $p;
var $d_Lcom_raquo_laminar_inputs_InputController$ = new $TypeData().i($c_Lcom_raquo_laminar_inputs_InputController$, "com.raquo.laminar.inputs.InputController$", ({
  dK: 1
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
  var prevChildRef = new $c_sr_ObjectRef(sentinelNode.aA().nextSibling);
  var lastIndexChild = new $c_sr_ObjectRef(sentinelNode);
  nextChildren.az(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextChild) => {
    if ((currentChildrenCount.aF <= index.aF)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().jl(parentNode, nextChild, lastIndexChild.ae, hooks);
      var ev$2 = nextChild.aA();
      prevChildRef.ae = ev$2;
      ev$2 = null;
      var ev$3 = ((1 + currentChildrenCount.aF) | 0);
      currentChildrenCount.aF = ev$3;
    } else if ((!$m_sr_BoxesRunTime$().p(nextChild.aA(), prevChildRef.ae))) {
      if ((!(!(!prevChildren.has(nextChild.aA()))))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().jl(parentNode, nextChild, lastIndexChild.ae, hooks);
        var ev$4 = nextChild.aA();
        prevChildRef.ae = ev$4;
        ev$4 = null;
        var ev$5 = ((1 + currentChildrenCount.aF) | 0);
        currentChildrenCount.aF = ev$5;
      } else {
        while (((!$m_sr_BoxesRunTime$().p(nextChild.aA(), prevChildRef.ae)) && (!$p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, prevChildRef.ae)))) {
          var nextPrevChildRef = prevChildRef.ae.nextSibling;
          $m_Lcom_raquo_laminar_nodes_ParentNode$().o7(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.ae));
          var ev$6 = nextPrevChildRef;
          prevChildRef.ae = ev$6;
          ev$6 = null;
          var ev$7 = (((-1) + currentChildrenCount.aF) | 0);
          currentChildrenCount.aF = ev$7;
        }
        if ((!$m_sr_BoxesRunTime$().p(nextChild.aA(), prevChildRef.ae))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().jl(parentNode, nextChild, lastIndexChild.ae, hooks);
          var ev$8 = nextChild.aA();
          prevChildRef.ae = ev$8;
          ev$8 = null;
        }
      }
    }
    if ((prevChildRef.ae.nextSibling === null)) {
      var ev$9 = ((1 + index.aF) | 0);
      currentChildrenCount.aF = ev$9;
    } else {
      var ev$10 = prevChildRef.ae.nextSibling;
      prevChildRef.ae = ev$10;
      ev$10 = null;
    }
    var ev$11 = nextChild;
    lastIndexChild.ae = ev$11;
    ev$11 = null;
    var ev$12 = ((1 + index.aF) | 0);
    index.aF = ev$12;
  })));
  while ((index.aF < currentChildrenCount.aF)) {
    var nextPrevChildRef$1 = prevChildRef.ae.nextSibling;
    $m_Lcom_raquo_laminar_nodes_ParentNode$().o7(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.ae));
    var ev$13 = nextPrevChildRef$1;
    prevChildRef.ae = ev$13;
    ev$13 = null;
    var ev$14 = (((-1) + currentChildrenCount.aF) | 0);
    currentChildrenCount.aF = ev$14;
  }
  return currentChildrenCount.aF;
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
$p.pd = (function(childrenSource, renderableSeq, renderableNode, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((ctx, owner, hooks) => {
    if ((!ctx.fk)) {
      ctx.ny();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childrenSource, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx$2) => ((components) => {
      this.rm(($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(components, null, null)), ctx$2, hooks);
    }))(ctx)), owner);
  })), initialHooks);
});
$p.rm = (function(newChildren, ctx, hooks) {
  if ((!ctx.fk)) {
    ctx.ny();
  }
  var newChildrenMap = $m_Lcom_raquo_laminar_inserters_InsertContext$().qM(newChildren);
  ctx.fi = $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I(this, ctx.eu, newChildren, newChildrenMap, ctx.gs, ctx.fj, ctx.fi, hooks);
  ctx.eu = newChildrenMap;
});
var $d_Lcom_raquo_laminar_inserters_ChildrenInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildrenInserter$, "com.raquo.laminar.inserters.ChildrenInserter$", ({
  dL: 1
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
  this.gs = null;
  this.fj = null;
  this.fk = false;
  this.fi = 0;
  this.eu = null;
  this.gs = parentNode;
  this.fj = sentinelNode;
  this.fk = strictMode;
  this.fi = extraNodeCount;
  this.eu = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.ny = (function() {
  if ((this.fk || (this.fi !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().pG(this.gs.bh)));
  }
  if ((this.eu === null)) {
    this.eu = new Map();
  }
  if ((!(!(!(this.fj.aA() instanceof Comment))))) {
    var contentNode = this.fj;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().qk(this.gs.bh, newSentinelNode.hT, contentNode.aA());
    this.fj = newSentinelNode;
    this.fi = 1;
    this.eu.set(contentNode.aA(), contentNode);
  }
  this.fk = true;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  dO: 1
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
$p.r6 = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eO(parentNode, sentinelNode, hooks);
  return this.ru(parentNode, sentinelNode, strictMode);
});
$p.ru = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
$p.qM = (function(nodes) {
  var acc = new Map();
  nodes.az(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((node) => {
    acc.set(node.aA(), node);
  })));
  return acc;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  dP: 1
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
$p.nV = (function(items, separator) {
  return ((items === "") ? $m_sci_Nil$() : $m_sci_Nil$().cd($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => (_$1 !== ""))))));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  dS: 1
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
  this.dZ = null;
  this.fm = false;
  this.gt = false;
  this.fl = null;
  this.dZ = eventProp;
  this.fm = shouldUseCapture;
  this.gt = shouldBePassive;
  this.fl = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.nQ = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.fl.e(ev);
    return (this$2.d() ? $m_s_None$() : new $c_s_Some((this$2.O(), value.T())));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.dZ, this.fm, this.gt, newProcessor);
});
$p.qw = (function(value) {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ev) => {
    var this$2 = this.fl.e(ev);
    return (this$2.d() ? $m_s_None$() : new $c_s_Some((this$2.O(), value)));
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.dZ, this.fm, this.gt, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  dW: 1
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
$p.h3 = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  dX: 1
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
  this.ot = null;
  this.ou = null;
  this.ov = null;
  this.ow = null;
  this.ot = "http://www.w3.org/2000/svg";
  this.ou = "http://www.w3.org/1999/xlink";
  this.ov = "http://www.w3.org/XML/1998/namespace";
  this.ow = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.qz = (function(namespace) {
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
  e1: 1
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
  this.lA = null;
  this.hP = null;
  this.lA = thisNode;
  this.hP = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  e2: 1
}));
var $d_Lcom_raquo_laminar_modifiers_Modifier = new $TypeData().i(1, "com.raquo.laminar.modifiers.Modifier", ({
  V: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.ox = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.ox = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  e7: 1
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
  this.lJ = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.lJ = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  eb: 1
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
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => _$4.ro())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  eg: 1
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
$p.eO = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.ge(nextParent);
  if ((hooks !== (void 0))) {
    hooks.qQ(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().pb(parent.aA(), child.aA());
  if (appended) {
    child.gb(nextParent);
  }
  return appended;
});
$p.o7 = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().p(child.aA().parentNode, parent.aA())) {
    child.ge($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().qX(parent.aA(), child.aA());
    child.gb($m_s_None$());
  }
  return removed;
});
$p.jl = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.ge(nextParent);
  if ((hooks !== (void 0))) {
    hooks.qQ(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().qj(parent.aA(), newChild.aA(), referenceChild.aA());
  newChild.gb(nextParent);
  return inserted;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  ej: 1
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
$p.rt = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gd(element.cf, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  el: 1
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
  ep: 1
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
  this.oz = false;
  this.fq = null;
  this.gA = null;
  this.lR = null;
  this.i2 = false;
  this.oy = 0;
  this.oB = 0;
  this.oA = null;
  $n_jl_FloatingPointBits$ = this;
  this.oz = true;
  this.fq = new ArrayBuffer(8);
  this.gA = new Int32Array(this.fq, 0, 2);
  new Float32Array(this.fq, 0, 2);
  this.lR = new Float64Array(this.fq, 0, 1);
  this.gA[0] = 16909060;
  this.i2 = ((new Int8Array(this.fq, 0, 8)[0] | 0) === 1);
  this.oy = (this.i2 ? 0 : 1);
  this.oB = (this.i2 ? 1 : 0);
  this.oA = null;
}
$p = $c_jl_FloatingPointBits$.prototype = new $h_O();
$p.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
$h_jl_FloatingPointBits$.prototype = $p;
$p.jw = (function(value) {
  var iv = ((value | 0.0) | 0);
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.lR[0] = value;
    return ((this.gA[0] | 0) ^ (this.gA[1] | 0));
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().i($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  eB: 1
}));
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().cm("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().cm("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().cm("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().cm("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().cm("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().cm("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().i7.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.bX) << 24) >> 24) === 0)) {
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
    $thiz.i4 = dict;
    $thiz.bX = (((1 | $thiz.bX) << 24) >> 24);
  }
  return $thiz.i4;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.bX) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.i4);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.bX) << 24) >> 24) === 0)) {
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
    $thiz.i5 = dict;
    $thiz.bX = (((2 | $thiz.bX) << 24) >> 24);
  }
  return $thiz.i5;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.bX) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.i5);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.bX) << 24) >> 24) === 0)) {
    $thiz.i3 = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.bX = (((4 | $thiz.bX) << 24) >> 24);
  }
  return $thiz.i3;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.bX) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.i3);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().cm("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bI("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bI("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bI("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bI("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bI("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().bI("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().bI("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().bI("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().bI("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bI("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bI("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bI("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bI("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().bI("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cm("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().cm("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().cm("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().cm("<anonymous function>"), "{anonymous}");
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
  this.i4 = null;
  this.i5 = null;
  this.i3 = null;
  this.bX = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.pR = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  eM: 1
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
$p.cm = (function(this$) {
  return new RegExp(this$);
});
$p.bI = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  eN: 1
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
  this.i6 = null;
  this.lS = null;
  $n_jl_System$SystemProperties$ = this;
  this.i6 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.lS = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.jf = (function(key, default$1) {
  if ((this.i6 !== null)) {
    var dict = this.i6;
    return ((!(!$m_jl_Utils$Cache$().i7.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.lS.jf(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  eS: 1
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
  this.i7 = null;
  $n_jl_Utils$Cache$ = this;
  this.i7 = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  eV: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bu: 1
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
$p.cb = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  eX: 1
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
$p.pm = (function(a, key) {
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
$p.nt = (function(a, b) {
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
    var hi = t.q;
    var i$2 = i;
    var t$1 = b.a[i$2];
    var lo$1 = t$1.o;
    var hi$1 = t$1.q;
    if ((!((lo === lo$1) && (hi === hi$1)))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.j4 = (function(a, b) {
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
$p.nu = (function(a, b) {
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
$p.nq = (function(a, b) {
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
$p.np = (function(a, b) {
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
$p.nv = (function(a, b) {
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
$p.nr = (function(a, b) {
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
$p.ns = (function(a, b) {
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
$p.a9 = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).a2.Q().a2.U(newLength);
  original.w(0, ret, 0, copyLength);
  return ret;
});
$p.at = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).a2.Q().a2.U(retLength);
  original.w(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  eY: 1
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
  this.o = 0;
  this.q = 0;
  this.o = lo;
  this.q = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.k = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.o === that.o) && (this.q === that.q)));
});
$p.r = (function() {
  return (this.o ^ this.q);
});
$p.v = (function() {
  return $m_RTLong$().o3(this.o, this.q);
});
$p.se = (function() {
  return this.o;
});
$p.sd = (function() {
  return $m_RTLong$().o2(this.o, this.q);
});
$p.sc = (function() {
  return $m_RTLong$().g9(this.o, this.q);
});
$p.rS = (function() {
  return ((this.o << 24) >> 24);
});
$p.sa = (function() {
  return ((this.o << 16) >> 16);
});
$p.s4 = (function() {
  return this.o;
});
$p.s5 = (function() {
  return this;
});
$p.rY = (function() {
  return $m_RTLong$().o2(this.o, this.q);
});
$p.rW = (function() {
  return $m_RTLong$().g9(this.o, this.q);
});
$p.rU = (function(that) {
  return $m_RTLong$().o0(this.o, this.q, that.o, that.q);
});
$p.rT = (function(that) {
  return $m_RTLong$().o0(this.o, this.q, that.o, that.q);
});
$p.rX = (function(b) {
  return ((this.o === b.o) && (this.q === b.q));
});
$p.s8 = (function(b) {
  return (!((this.o === b.o) && (this.q === b.q)));
});
$p.rJ = (function(b) {
  var ahi = this.q;
  var bhi = b.q;
  return ((ahi === bhi) ? (((-2147483648) ^ this.o) < ((-2147483648) ^ b.o)) : (ahi < bhi));
});
$p.rK = (function(b) {
  var ahi = this.q;
  var bhi = b.q;
  return ((ahi === bhi) ? (((-2147483648) ^ this.o) <= ((-2147483648) ^ b.o)) : (ahi < bhi));
});
$p.rF = (function(b) {
  var ahi = this.q;
  var bhi = b.q;
  return ((ahi === bhi) ? (((-2147483648) ^ this.o) > ((-2147483648) ^ b.o)) : (ahi > bhi));
});
$p.rG = (function(b) {
  var ahi = this.q;
  var bhi = b.q;
  return ((ahi === bhi) ? (((-2147483648) ^ this.o) >= ((-2147483648) ^ b.o)) : (ahi > bhi));
});
$p.sg = (function() {
  return new $c_RTLong((~this.o), (~this.q));
});
$p.rD = (function(b) {
  return new $c_RTLong((this.o | b.o), (this.q | b.q));
});
$p.rC = (function(b) {
  return new $c_RTLong((this.o & b.o), (this.q & b.q));
});
$p.rQ = (function(b) {
  return new $c_RTLong((this.o ^ b.o), (this.q ^ b.q));
});
$p.rL = (function(n) {
  var lo = this.o;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.q << n)) : (lo << n)));
});
$p.rI = (function(n) {
  var hi = this.q;
  return new $c_RTLong((((32 & n) === 0) ? (((this.o >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$p.rH = (function(n) {
  var hi = this.q;
  return new $c_RTLong((((32 & n) === 0) ? (((this.o >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$p.sf = (function() {
  var lo = this.o;
  var hi = this.q;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$p.rO = (function(b) {
  var alo = this.o;
  var ahi = this.q;
  var bhi = b.q;
  var lo = ((alo + b.o) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$p.rM = (function(b) {
  var alo = this.o;
  var ahi = this.q;
  var bhi = b.q;
  var lo = ((alo - b.o) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$p.rP = (function(b) {
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
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.q) + Math.imul(this.q, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
});
$p.rE = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.pJ(this.o, this.q, b.o, b.q), this$1.aa);
});
$p.rN = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.qW(this.o, this.q, b.o, b.q), this$1.aa);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bv)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  bv: 1
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
      $thiz.aa = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.aa = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - (Math.clz32(blo) | 0)) | 0);
    $thiz.aa = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - (Math.clz32(bhi) | 0)) | 0);
    $thiz.aa = 0;
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
      $thiz.aa = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.aa = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.aa = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.aa = (ahi & (((-1) + bhi) | 0));
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
    $thiz.aa = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.aa = remHi;
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
  this.aa = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.o3 = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$p.g9 = (function(lo, hi) {
  return ((hi < 0) ? (-((4.294967296E9 * (+(((lo !== 0) ? (~hi) : ((-hi) | 0)) >>> 0.0))) + (+(((-lo) | 0) >>> 0.0)))) : ((4.294967296E9 * hi) + (+(lo >>> 0.0))));
});
$p.o2 = (function(lo, hi) {
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
$p.s1 = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$p.s0 = (function(value) {
  return new $c_RTLong(this.o1(value), this.aa);
});
$p.o1 = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.aa = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.aa = 2147483647;
    return (-1);
  } else {
    var rawLo = ((value | 0.0) | 0);
    var rawHi = (((value / 4.294967296E9) | 0.0) | 0);
    this.aa = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.o0 = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.pJ = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.aa = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.aa = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.aa = (-1);
      return (-1);
    } else {
      this.aa = 0;
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
      var hi$2 = this.aa;
      this.aa = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$p.qW = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.aa = (lo >> 31);
        return lo;
      } else {
        this.aa = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.aa = 0;
      return 0;
    } else {
      this.aa = ahi;
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
      var hi$2 = this.aa;
      this.aa = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  f1: 1
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
  this.i8 = null;
  this.lW = null;
  $n_s_Array$EmptyArrays$ = this;
  this.i8 = new $ac_I(0);
  this.lW = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  f7: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  aH: 1
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
  this.lX = null;
  this.oC = null;
  this.gE = null;
  $n_s_PartialFunction$ = this;
  this.lX = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $m_s_PartialFunction$().lX));
  this.oC = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$3$2$2) => false));
  this.gE = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  ff: 1
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
  this.m2 = null;
  $n_sc_ArrayOps$ = this;
  this.m2 = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_ArrayOps$().m2));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.pW = (function(this$, f) {
  var len = $m_jl_reflect_Array$().cb(this$);
  var i = 0;
  if ((this$ instanceof $ac_O)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_I)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_D)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_J)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_F)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_C)) {
    while ((i < len)) {
      f.e($bC(this$.a[i]));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_B)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_S)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_Z)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $c_s_MatchError(this$);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  fm: 1
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
$p.cl = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  fy: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.j();
  while (it.l()) {
    f.e(it.h());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.j();
  while ((res && it.l())) {
    res = (!(!p.e(it.h())));
  }
  return res;
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  switch ($thiz.y()) {
    case (-1): {
      return (!$thiz.j().l());
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
  var it = $thiz.j();
  var i = start;
  var y = (($m_jl_reflect_Array$().cb(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.l())) {
    $m_sr_ScalaRunTime$().iX(xs, i, it.h());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option($thiz, pf) {
  var sentinel = new $c_sc_IterableOnceOps$$anon$1($thiz);
  var it = $thiz.j();
  while (it.l()) {
    var x = pf.bx(it.h(), sentinel);
    if ((x !== sentinel)) {
      return new $c_s_Some(x);
    }
  }
  return $m_s_None$();
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.y() === 0) ? (("" + start) + end) : $thiz.dI($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).b9.n);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.b9;
  if ((start.length !== 0)) {
    jsb.n = (("" + jsb.n) + start);
  }
  var it = $thiz.j();
  if (it.l()) {
    var obj = it.h();
    jsb.n = (("" + jsb.n) + obj);
    while (it.l()) {
      jsb.n = (("" + jsb.n) + sep);
      var obj$1 = it.h();
      jsb.n = (("" + jsb.n) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.n = (("" + jsb.n) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.y() >= 0)) {
    var destination = evidence$2.bA($thiz.y());
    $thiz.by(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$2.aZ();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.j();
    while (it.l()) {
      var elem = it.h();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a2.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.a2.r().w(jsElems);
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.mb = null;
  this.fv = null;
  this.mb = head;
  this.fv = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.qd = (function() {
  return this.mb.T().j();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  fL: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.me = null;
  $n_sc_StringOps$ = this;
  this.me = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $m_sc_StringOps$().me));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.pu = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.oh = (function(this$, marginChar) {
  var sb = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), this$.length);
  var this$3 = new $c_sc_StringOps$$anon$1(this$, false);
  while ((this$3.b1 < this$3.e2)) {
    var x0 = this$3.nT();
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
    sb.n = (("" + sb.n) + stripped);
  }
  return sb.n;
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  fT: 1
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
$p.g4 = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  fZ: 1
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
    return $m_jl_Integer$().o5($m_jl_System$SystemProperties$().jf("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10);
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
  this.mi = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.mi = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  g8: 1
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
  this.ix = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.j5 = (function() {
  var state = this.ix;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.T();
});
$p.jj = (function(state) {
  if ((this.ix !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.ix = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  gc: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.mo = null;
  $n_sci_MapNode$ = this;
  this.mo = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  gt: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_jl_reflect_Array$().cb(as)) | 0)));
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
$p.o8 = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > (((-1) + as.a.length) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I((((-1) + as.a.length) | 0));
  as.w(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = (((-1) + ((as.a.length - ix) | 0)) | 0);
  as.w(srcPos, result, ix, length);
  return result;
});
$p.ql = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.w(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.w(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  aR: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.fF = 0;
  $n_sci_Node$ = this;
  this.fF = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.ei = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.dL = (function(mask) {
  return (1 << mask);
});
$p.qg = (function(bitmap, bitpos) {
  return $m_jl_Integer$().cw((bitmap & (((-1) + bitpos) | 0)));
});
$p.cz = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.qg(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  gw: 1
}));
var $n_sci_Node$;
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$();
  }
  return $n_sci_Node$;
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.iB = null;
  this.ad = null;
  this.b6 = null;
  this.ci = null;
  this.fH = null;
  this.iC = null;
  $n_sci_VectorStatics$ = this;
  this.iB = new $ac_O(0);
  this.ad = new ($d_O.r().r().C)(0);
  this.b6 = new ($d_O.r().r().r().C)(0);
  this.ci = new ($d_O.r().r().r().r().C)(0);
  this.fH = new ($d_O.r().r().r().r().r().C)(0);
  this.iC = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.eP = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.w(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.F = (function(a, elem) {
  var ac = $m_ju_Arrays$().a9(a, ((1 + a.a.length) | 0));
  ac.a[(((-1) + ac.a.length) | 0)] = elem;
  return ac;
});
$p.eQ = (function(elem, a) {
  var ac = new $ac_O(((1 + a.a.length) | 0));
  var length = a.a.length;
  a.w(0, ac, 1, length);
  ac.a[0] = elem;
  return ac;
});
$p.B = (function(elem, a) {
  var ac = $objectGetClass(a).a2.Q().a2.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.w(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.j7 = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.e(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.j7(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.cc = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.e(v1);
    if ((!Object.is(v1, v2))) {
      return this.qt(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.qt = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.w(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = f.e(a.a[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.ar = (function(n, a, f) {
  if ((n === 1)) {
    return this.cc(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.ar((((-1) + n) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.qu(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.qu = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).a2.Q().a2.U(a.a.length);
  if ((at > 0)) {
    a.w(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.ar((((-1) + n) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.eN = (function(suffix1, xs) {
  if ($is_sci_Iterable(xs)) {
    if ((xs.jD(((32 - suffix1.a.length) | 0)) <= 0)) {
      var x1$2 = xs.aL();
      switch (x1$2) {
        case 0: {
          return null;
          break;
        }
        case 1: {
          return this.F(suffix1, xs.u());
          break;
        }
        default: {
          var suffix1b = $m_ju_Arrays$().a9(suffix1, ((suffix1.a.length + x1$2) | 0));
          xs.by(suffix1b, suffix1.a.length, 2147483647);
          return suffix1b;
        }
      }
    } else {
      return null;
    }
  } else {
    var s = xs.y();
    if (((s > 0) && (s <= ((32 - suffix1.a.length) | 0)))) {
      var suffix1b$2 = $m_ju_Arrays$().a9(suffix1, ((suffix1.a.length + s) | 0));
      xs.j().by(suffix1b$2, suffix1.a.length, 2147483647);
      return suffix1b$2;
    } else {
      return null;
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  gI: 1
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
  this.eK = null;
  this.cT = 0;
  this.b8 = null;
  this.eK = _key;
  this.cT = _hash;
  this.b8 = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.pT = (function(k, h) {
  var _$this = this;
  while (true) {
    if (((h === _$this.cT) && $m_sr_BoxesRunTime$().p(k, _$this.eK))) {
      return _$this;
    } else if (((_$this.b8 === null) || (_$this.cT > h))) {
      return null;
    } else {
      _$this = _$this.b8;
    }
  }
});
$p.v = (function() {
  return ((((("Node(" + this.eK) + ", ") + this.cT) + ") -> ") + this.b8);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  h0: 1
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
$p.ne = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  h6: 1
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
$p.p = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.pQ(x, y) : ((x instanceof $Char) ? this.pO(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.pQ = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.pP(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.o;
      var hi = t.q;
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
$p.pP = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      return (x2 === $m_RTLong$().g9(t.o, t.q));
    } else {
      return (false && yn.k(x2));
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.o;
    var hi$1 = t$1.q;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.o;
      var hi$2 = t$2.q;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return ($m_RTLong$().g9(lo$1, hi$1) === x3$3);
    } else {
      return (false && yn.k(new $c_RTLong(lo$1, hi$1)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.pO = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $c_RTLong)) {
      var t = $uJ(y);
      var lo = t.o;
      var hi = t.q;
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
  hH: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  hM: 1
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
$p.ed = (function(xs, idx) {
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
$p.iX = (function(xs, idx, value) {
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
$p.eM = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.be(), (x.aY() + "("), ",", ")");
});
$p.q2 = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().jH(xs));
});
$p.A = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  hO: 1
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
$p.g = (function(hash, data) {
  var h = this.d3(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.d3 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.C = (function(hash, length) {
  return this.pl((hash ^ length));
});
$p.pl = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.eU = (function(lv) {
  var lo = lv.o;
  var hi = lv.q;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.cj = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.o1(dv);
    var hi = this$1.aa;
    return (($m_RTLong$().g9(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().jw(dv));
  }
});
$p.N = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.cj((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.eU(new $c_RTLong(t.o, t.q));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.dP = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  hQ: 1
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
  hR: 1
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
$p.pg = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  hX: 1
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
$p.rh = (function(interval, body) {
  return setTimeout((() => {
    body.T();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  hY: 1
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
$p.rq = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.gQ;
  } else {
    var result = [];
    seq.az(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  i9: 1
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
$p.dK = (function(t) {
  return (!(false || (false || (false || (false || false)))));
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  ic: 1
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
$p.g = (function(hash, data) {
  var h = this.d3(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.d3 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.C = (function(hash, length) {
  return this.bJ((hash ^ length));
});
$p.bJ = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.ok = (function(x, y, seed) {
  var h = seed;
  h = this.g(h, $f_T__hashCode__I("Tuple2"));
  h = this.g(h, x);
  h = this.g(h, y);
  return this.C(h, 2);
});
$p.cB = (function(x, seed, ignorePrefix) {
  var arr = x.aW();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.aY());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.g(h, $f_T__hashCode__I(x.aY()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.g(h, $m_sr_Statics$().N(x.aX(i)));
      i = ((1 + i) | 0);
    }
    return this.C(h, arr);
  }
});
$p.jG = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.j();
  while (iterator.l()) {
    var x = iterator.h();
    var h = $m_sr_Statics$().N(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.g(h$2, a);
  h$2 = this.g(h$2, b);
  h$2 = this.d3(h$2, c);
  return this.C(h$2, n);
});
$p.qR = (function(xs, seed) {
  var it = xs.j();
  var h = seed;
  if ((!it.l())) {
    return this.C(h, 0);
  }
  var x0 = it.h();
  if ((!it.l())) {
    return this.C(this.g(h, $m_sr_Statics$().N(x0)), 1);
  }
  var x1 = it.h();
  var initial = $m_sr_Statics$().N(x0);
  h = this.g(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().N(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.l()) {
    h = this.g(h, prev);
    var hash = $m_sr_Statics$().N(it.h());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.g(h, hash);
      i = ((1 + i) | 0);
      while (it.l()) {
        h = this.g(h, $m_sr_Statics$().N(it.h()));
        i = ((1 + i) | 0);
      }
      return this.C(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.bJ(this.g(this.g(h0, rangeDiff), prev));
});
$p.n1 = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().cb(a);
  switch (l) {
    case 0: {
      return this.C(h, 0);
      break;
    }
    case 1: {
      return this.C(this.g(h, $m_sr_Statics$().N($m_sr_ScalaRunTime$().ed(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().N($m_sr_ScalaRunTime$().ed(a, 0));
      h = this.g(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().N($m_sr_ScalaRunTime$().ed(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.g(h, prev);
        var hash = $m_sr_Statics$().N($m_sr_ScalaRunTime$().ed(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.g(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.g(h, $m_sr_Statics$().N($m_sr_ScalaRunTime$().ed(a, i)));
            i = ((1 + i) | 0);
          }
          return this.C(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bJ(this.g(this.g(h0, rangeDiff), prev));
    }
  }
});
$p.qU = (function(start, step, last, seed) {
  return this.bJ(this.g(this.g(this.g(seed, start), step), last));
});
$p.qh = (function(a, seed) {
  var h = seed;
  var l = a.m();
  switch (l) {
    case 0: {
      return this.C(h, 0);
      break;
    }
    case 1: {
      return this.C(this.g(h, $m_sr_Statics$().N(a.t(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().N(a.t(0));
      h = this.g(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().N(a.t(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.g(h, prev);
        var hash = $m_sr_Statics$().N(a.t(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.g(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.g(h, $m_sr_Statics$().N(a.t(i)));
            i = ((1 + i) | 0);
          }
          return this.C(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bJ(this.g(this.g(h0, rangeDiff), prev));
    }
  }
});
$p.qr = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.d())) {
    var head = elems.u();
    var tail = elems.x();
    var hash = $m_sr_Statics$().N(head);
    h = this.g(h, hash);
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
  return ((rangeState === 2) ? this.qU(initial, rangeDiff, prev, seed) : this.C(h, n));
});
$p.na = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.C(h, 0);
      break;
    }
    case 1: {
      return this.C(this.g(h, (a.a[0] ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = (a.a[0] ? 1231 : 1237);
      h = this.g(h, initial);
      var h0 = h;
      var prev = (a.a[1] ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.g(h, prev);
        var hash = (a.a[i] ? 1231 : 1237);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.g(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.g(h, (a.a[i] ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.C(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bJ(this.g(this.g(h0, rangeDiff), prev));
    }
  }
});
$p.n2 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.C(h, 0);
      break;
    }
    case 1: {
      return this.C(this.g(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.g(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.g(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.g(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.g(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.C(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bJ(this.g(this.g(h0, rangeDiff), prev));
    }
  }
});
$p.n3 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.C(h, 0);
      break;
    }
    case 1: {
      return this.C(this.g(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.g(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.g(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.g(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.g(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.C(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bJ(this.g(this.g(h0, rangeDiff), prev));
    }
  }
});
$p.n4 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.C(h, 0);
      break;
    }
    case 1: {
      return this.C(this.g(h, $m_sr_Statics$().cj(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cj(a.a[0]);
      h = this.g(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cj(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.g(h, prev);
        var hash = $m_sr_Statics$().cj(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.g(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.g(h, $m_sr_Statics$().cj(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.C(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bJ(this.g(this.g(h0, rangeDiff), prev));
    }
  }
});
$p.n5 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.C(h, 0);
      break;
    }
    case 1: {
      return this.C(this.g(h, $m_sr_Statics$().cj(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().cj(a.a[0]);
      h = this.g(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().cj(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.g(h, prev);
        var hash = $m_sr_Statics$().cj(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.g(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.g(h, $m_sr_Statics$().cj(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.C(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bJ(this.g(this.g(h0, rangeDiff), prev));
    }
  }
});
$p.n6 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.C(h, 0);
      break;
    }
    case 1: {
      return this.C(this.g(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.g(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.g(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.g(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.g(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.C(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bJ(this.g(this.g(h0, rangeDiff), prev));
    }
  }
});
$p.n7 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.C(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = a.a[0];
      return this.C(this.g($x_1, $m_sr_Statics$().eU(new $c_RTLong(t.o, t.q))), 1);
      break;
    }
    default: {
      var t$1 = a.a[0];
      var initial = $m_sr_Statics$().eU(new $c_RTLong(t$1.o, t$1.q));
      h = this.g(h, initial);
      var h0 = h;
      var t$2 = a.a[1];
      var prev = $m_sr_Statics$().eU(new $c_RTLong(t$2.o, t$2.q));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.g(h, prev);
        var t$3 = a.a[i];
        var hash = $m_sr_Statics$().eU(new $c_RTLong(t$3.o, t$3.q));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.g(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.a[i];
            h = this.g($x_2, $m_sr_Statics$().eU(new $c_RTLong(t$4.o, t$4.q)));
            i = ((1 + i) | 0);
          }
          return this.C(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bJ(this.g(this.g(h0, rangeDiff), prev));
    }
  }
});
$p.n8 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.C(h, 0);
      break;
    }
    case 1: {
      return this.C(this.g(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.g(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.g(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.g(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.g(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.C(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bJ(this.g(this.g(h0, rangeDiff), prev));
    }
  }
});
$p.n9 = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.C(h, 0);
      break;
    }
    case 1: {
      return this.C(this.g(h, 0), 1);
      break;
    }
    default: {
      h = this.g(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.g(h, prev);
        if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
          h = this.g(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.g(h, 0);
            i = ((1 + i) | 0);
          }
          return this.C(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.bJ(this.g(this.g(h0, rangeDiff), prev));
    }
  }
});
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.ck(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    $thiz.jy(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.hd(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.hd(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.ks = null;
  this.kr = null;
  this.hy = false;
  this.kr = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.hy = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.eZ = (function() {
  return this.ks;
});
$p.ng = (function(x$0) {
  this.ks = x$0;
});
$p.o4 = (function(subscription) {
  if (this.hy) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.kr.T();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.nO = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.hy = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  d2: 1,
  ba: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.kO = null;
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
$p.eZ = (function() {
  return this.kO;
});
$p.ng = (function(x$0) {
  this.kO = x$0;
});
$p.nO = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.o4 = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  dm: 1,
  ba: 1
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
$p.g0 = (function(scalaValue) {
  return scalaValue;
});
$p.j2 = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  dt: 1,
  bd: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.lx = null;
  this.lz = null;
  this.ly = null;
  this.hJ = null;
  this.lx = getRawDomValue;
  this.lz = setRawDomValue;
  this.ly = separator;
  this.hJ = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.eL = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().s.oT(), $m_Lcom_raquo_laminar_keys_CompositeKey$().nV(items, this.ly)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  dR: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.hK = null;
  this.hK = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.nl = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().nV(domValue, this.hK);
});
$p.no = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.hK, "");
});
$p.j2 = (function(domValue) {
  return this.nl(domValue);
});
$p.g0 = (function(scalaValue) {
  return this.no(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  dT: 1,
  bd: 1
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
  dV: 1,
  dU: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.fn = null;
  this.fn = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  dY: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.fo = null;
  this.hL = null;
  this.fo = name;
  this.hL = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  dZ: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.cG = null;
  this.hM = null;
  this.cG = name;
  this.hM = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.oS = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().of(element, prop, value$2);
  })));
});
$p.gV = (function(values) {
  var update = ((this.cG === "value") ? new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element, nextValue, reason) => {
    var nextDomValue = this.hM.g0(nextValue);
    var x = $m_Lcom_raquo_laminar_DomApi$().q7(element, this);
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().p(nextDomValue, x)))) {
      $m_Lcom_raquo_laminar_DomApi$().og(element, this, nextDomValue);
    }
  })) : new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((element$2, nextValue$2, reason$2) => {
    $m_Lcom_raquo_laminar_DomApi$().of(element$2, this, nextValue$2);
  })));
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.f0(), update);
});
function $isArrayOf_Lcom_raquo_laminar_keys_HtmlProp(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bi)));
}
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  bi: 1,
  aa: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.hO = null;
  this.hN = null;
  this.gw = null;
  this.gx = null;
  this.hO = localName;
  this.hN = codec;
  var this$1 = (namespacePrefix.d() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.O() + ":") + localName)));
  this.gw = (this$1.d() ? localName : this$1.O());
  this.gx = (namespacePrefix.d() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().qz(namespacePrefix.O())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  e0: 1,
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
$p.cv = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  e8: 1,
  V: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.lI = null;
  this.lI = f$2;
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
$p.cv = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.lI.e(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bg || (!when))) {
    f();
  } else {
    this$2.bg = true;
    try {
      f();
    } finally {
      this$2.bg = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  e9: 1,
  V: 1
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
  ec: 1,
  ea: 1
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
  ee: 1,
  ed: 1
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
  this.lK = null;
  this.lK = render$2;
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
$p.pk = (function(value) {
  return this.lK.e(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  eh: 1,
  ef: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.nh(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().pH($thiz.aA(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.hZ = null;
  this.hZ = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.bp = (function(modifiers) {
  var element = this.po();
  modifiers.az(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((modifier) => {
    modifier.cv(element);
  })));
  return element;
});
$p.po = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().pC(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  er: 1,
  bn: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.lQ = null;
  this.lQ = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  es: 1,
  bn: 1
}));
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.gz) << 24) >> 24) === 0)) {
    $thiz.i0 = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.gz = (((32 | $thiz.gz) << 24) >> 24);
  }
  return $thiz.i0;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.gz) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.i0);
}
/** @constructor */
function $c_jl_Character$() {
  this.i0 = null;
  this.gz = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.rr = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.pI = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().pm($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
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
  ey: 1,
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
$p.o5 = (function(s, radix) {
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
    var digit = $m_jl_Character$().pI(s.charCodeAt(i), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $ps_jl_Integer$__fail$1__T__E(s);
    }
    i = ((1 + i) | 0);
  }
  return (negative ? (((-result) | 0.0) | 0) : ((result | 0.0) | 0));
});
$p.cw = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  eE: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.ex = null;
  this.fr = null;
  this.ey = null;
  this.ez = 0;
  this.ew = 0;
  this.ex = declaringClass;
  this.fr = methodName;
  this.ey = fileName;
  this.ez = lineNumber;
  this.ew = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.k = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.ey === that.ey) && (this.ez === that.ez)) && (this.ew === that.ew)) && (this.ex === that.ex)) && (this.fr === that.fr)));
});
$p.v = (function() {
  var result = "";
  if ((this.ex !== "<jscode>")) {
    result = ((("" + result) + this.ex) + ".");
  }
  result = (("" + result) + this.fr);
  if ((this.ey === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.ey);
    if ((this.ez >= 0)) {
      result = ((result + ":") + this.ez);
      if ((this.ew >= 0)) {
        result = ((result + ":") + this.ew);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.r = (function() {
  return (((($f_T__hashCode__I(this.ex) ^ $f_T__hashCode__I(this.fr)) ^ $f_T__hashCode__I(this.ey)) ^ this.ez) ^ this.ew);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  bt: 1,
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
$p.qA = (function(value, offset, count) {
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
  eP: 1,
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
  $thiz.lU = s;
  $thiz.lV = writableStackTrace;
  if (writableStackTrace) {
    $thiz.pS();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.lU = null;
    this.lV = false;
    this.lT = null;
    this.gB = null;
  }
  jk(cause) {
    return this;
  }
  g3() {
    return this.lU;
  }
  pS() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.ax : this);
    this.lT = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  q9() {
    if ((this.gB === null)) {
      if (this.lV) {
        this.gB = $m_jl_StackTrace$().pR(this.lT);
      } else {
        this.gB = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.gB;
  }
  v() {
    var className = $objectClassName(this);
    var message = this.g3();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  r() {
    return $c_O.prototype.r.call(this);
  }
  k(that) {
    return $c_O.prototype.k.call(this, that);
  }
  get "message"() {
    var m = this.g3();
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.gC = null;
  $n_s_$less$colon$less$ = this;
  this.gC = new $c_s_$less$colon$less$$anon$1();
}
$p = $c_s_$less$colon$less$.prototype = new $h_O();
$p.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $p;
var $d_s_$less$colon$less$ = new $TypeData().i($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  f4: 1,
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
    $m_sr_ScalaRunTime$().iX(dest, j, $m_sr_ScalaRunTime$().ed(src, i));
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
$p.nz = (function(it, evidence$3) {
  var n = it.y();
  if ((n > (-1))) {
    var elements = evidence$3.bA(n);
    var iterator = it.j();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().iX(elements, i, iterator.h());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.aZ();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.j();
    while (iterator$2.l()) {
      var elem = iterator$2.h();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a2.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.a2.r().w(jsElems);
  }
});
$p.fY = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.a2.Z && $objectGetClass(dest).a2.R(srcClass.a2))) {
    src.w(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.nw = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().p(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  f6: 1,
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
$p.rz = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $m_scm_ArraySeq$().iG : new $c_scm_ArraySeq$ofRef(xs)));
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
$p.nZ = (function(xo) {
  return (xo.d() ? $m_sc_Iterable$().bz() : new $c_sc_Iterable$$anon$1(xo.O()));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  fe: 1,
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
  return ($thiz.bV(x) ? $thiz.e(x) : default$1.e(x));
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
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.bb($m_scm_Buffer$().h4(elems));
  } else {
    var it = elems.j();
    while (it.l()) {
      $thiz.aU(it.h());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.oH = null;
  this.oQ = null;
  this.oI = null;
  this.oL = null;
  this.oM = null;
  this.oK = null;
  this.oJ = null;
  this.oG = null;
  this.oR = null;
  this.oE = null;
  this.oP = null;
  this.oF = null;
  this.oN = null;
  this.oO = null;
  $n_s_reflect_ClassTag$ = this;
  this.oH = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.oQ = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.oI = $m_s_reflect_ManifestFactory$CharManifest$();
  this.oL = $m_s_reflect_ManifestFactory$IntManifest$();
  this.oM = $m_s_reflect_ManifestFactory$LongManifest$();
  this.oK = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.oJ = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.oG = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.oR = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.oE = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.oP = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.oF = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.oN = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.oO = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.mY = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  hc: 1,
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
  this.gN = false;
  this.gN = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.v = (function() {
  return ("" + this.gN);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  hG: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.aF = 0;
  this.aF = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.v = (function() {
  return ("" + this.aF);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  hJ: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.gO = false;
  this.gP = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.qi = (function(value) {
  this.gP = value;
  this.gO = true;
  return value;
});
$p.v = (function() {
  return ("LazyRef " + (this.gO ? ("of: " + this.gP) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  hK: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.ae = null;
  this.ae = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.v = (function() {
  return ("" + this.ae);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  hN: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.aG = 0;
  this.dH = 0;
  this.mM = 0;
  this.iM = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.aG = $f_T__hashCode__I("Seq");
  this.dH = $f_T__hashCode__I("Map");
  this.mM = $f_T__hashCode__I("Set");
  this.iM = this.jG($m_sci_Nil$(), this.dH);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cn = (function(x, y) {
  return this.ok($m_sr_Statics$().N(x), $m_sr_Statics$().N(y), (-889275714));
});
$p.oe = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.qh(xs, this.aG) : ((xs instanceof $c_sci_List) ? this.qr(xs, this.aG) : this.qR(xs, this.aG)));
});
$p.qv = (function(xs) {
  if (xs.d()) {
    return this.iM;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.dH;
    xs.ef(accum);
    h = this.g(h, accum.gR);
    h = this.g(h, accum.gS);
    h = this.d3(h, accum.gT);
    return this.C(h, accum.gU);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  ie: 1,
  id: 1
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
  this.gR = 0;
  this.gS = 0;
  this.gU = 0;
  this.gT = 0;
  this.gR = 0;
  this.gS = 0;
  this.gU = 0;
  this.gT = 1;
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
$p.pf = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cn(k, v);
  this.gR = ((this.gR + h) | 0);
  this.gS = (this.gS ^ h);
  this.gT = Math.imul(this.gT, (1 | h));
  this.gU = ((1 + this.gU) | 0);
});
$p.ec = (function(v1, v2) {
  this.pf(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  ig: 1,
  aI: 1
}));
/** @constructor */
function $c_Ladversaries_Adversary$() {
  this.hm = null;
  this.jJ = null;
  this.jP = null;
  this.jK = null;
  this.jM = null;
  this.jL = null;
  this.jN = null;
  this.jO = null;
  this.jI = null;
  $n_Ladversaries_Adversary$ = this;
  this.hm = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Brandenburg-Prussia", $m_sci_Vector$().bc($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town to land #3.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-3-2222-3333", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-3-2222-3333", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-3-222-3333", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "1-3-222-3333", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "3-222-3333", $m_s_None$())]))), $m_s_None$(), "On each board with Town/City, add 1 Town to a land without Town.", $m_sci_Nil$().cd($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["9 (3/3/3)", "9 (3/3/3)", "10 (3/4/3)", "11 (4/4/3)", "11 (4/4/3)", "12 (4/4/4)"])))));
  this.jJ = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("England", $m_sci_Vector$().bc($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "Invader Build Cards affect matching lands without Invaders if they are adjacent to at least 2 Town/City.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 City to land #1 and 1 Town to land #2", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. Remove the tile when a Stage II card slides onto it, putting that card in the discard.", new $c_s_Some(4)), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "Put the \"High Immigration\" tile on the Invader board, to the left of \"Ravage\". The Invaders take this Build action each Invader phase before Ravaging. Cards slide left from Ravage to it, and from it to the discard pile. ", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Town/City have +1 Health.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Add an additional Fear to the Fear Pool per player in the game.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__HighImmigration__Ladversaries_Stage(), "During any Invader Phase where you resolve no Fear Cards, perform the Build from High Immigration twice. (This has no effect if no card is on the extra Build slot.)", $m_s_None$())]))), new $c_s_Some("If 7 or more Town/City are ever in a single land, the Invaders win."), "On each board with Town/City, Build in the land with the most Town/City.", $m_sci_Nil$().cd($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/4/3)", "13 (4/5/4)", "14 (4/5/5)", "14 (4/5/5)", "13 (4/5/4)"])))));
  this.jP = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Sweden", $m_sci_Vector$().bc($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "If the Invaders do at least 6 Damage to the land during Ravage, add an extra Blight. The additional Blight does not destroy Presence or cause cascades.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 City to land #4. On boards where land #4 starts with Blight, put that Blight in land #5 instead.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Town deal 3 Damage. City deal 5 Damage.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "After adding all other Invaders, Accelerate the Invader Deck. On each board, add 1 Town to the land of that terrain with the fewest Invaders.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When Ravaging adds at least 1 Blight to a land, also add 1 Town to an adjacent land without Town/City. Cascading Blight does not cause this effect.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town and 1 Blight to land #8. The Blight comes from the box, not the Blight Card.", $m_s_None$())]))), $m_s_None$(), "After Invaders Explore into each land this Phase, if that land has at least as many Invaders as Dahan, replace 1 Dahan with 1 Town.", $m_sci_Nil$().cd($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/4/3)", "10 (3/4/3)", "11 (3/4/4)", "12 (4/4/4)", "13 (4/4/5)"])))));
  this.jK = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("France", $m_sci_Vector$().bc($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "Except during Setup: After Invaders successfully Explore into a land which had no Town/City, add 1 Explorer there.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put the \"Slave Rebellion\" event under the top 3 cards of the Event Deck./City, add 1 Explorer there.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "After Invaders Build in a land with 2 Explorer or more, replace all but 1 Explorer there with an equal number of Town.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board add 1 Town to the highest-numbered land without Town. Add 1 Town to land #1.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "Whenever Invaders Build a Coastal City, add 1 Town to the adjacent land with the fewest Town.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "When you remove Blight from the board, put it here instead of onto the Blight Card. As soon as you have 3 Blight per player here, move it all back to the Blight Card.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "After resolving an Explore Card, on each board add 1 Explorer to a land without any. Fear Card effects never remove Explorer. If one would, you may instead Push that Explorer.", $m_s_None$())]))), new $c_s_Some("Before Setup, return all but 7 Town per player to the box. Invaders win if you ever cannot place a Town."), "After Exploring, on each board, pick a land of the shown terrain. If it has Town/City, add 1 Blight. Otherwise, add 1 Town.", $m_sci_Nil$().cd($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/4/3)", "11 (4/4/3)", "12 (4/4/4)", "13 (4/5/4)", "14 (4/5/5)"])))));
  this.jM = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Habsburg Monarchy (Livestock)", $m_sci_Vector$().bc($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "After the normal Build Step: In each land matching a Build Card, Gather 1 Town from a land not matching a Build Card. (In board/land order.)", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board, add 1 Town to land #2 and 1 Town to the highest-numbered land without Setup symbols.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "when Invaders would Build 1 City in an Inland land, they instead Build 2 Town.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-2222-33333", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "Town in lands without Blight are Durable: they have +2 Health, and \"Destroy Town\" effects instead deal 2 Damage (to those Town only) per Town they could Destroy. (\"Destroy all Town\" works normally.)", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put the Habsburg Reminder Card under the top 5 Invader Cards. When Revealed, on each board, add 1 City to a Coastal land without City and 1 Town to the 3 Inland lands with the fewest Blight.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Ravages do +2 Damage (total) if any adjacent lands have Town. (This does not cause lands without Invaders to Ravage.)", $m_s_None$())]))), new $c_s_Some("Track how many Blight come off the Blight Card during Ravages that do 8+ Damage to the land. If that number ever exceeds players, the Invaders win."), "After Exploring: On each board with 4 or fewer Blight, add 1 Town to a land without Town/Blight. On each board with 2 or fewer Blight, do so again.", $m_sci_Nil$().cd($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/5/2)", "12 (4/5/3)", "12 (4/5/3)", "13 (4/6/3)", "14 (5/6/3)"])))));
  this.jL = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Habsburg Mining Expedition", $m_sci_Vector$().bc($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "Lands with 3 or more Invaders are Mining lands.", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When Blight added by a Ravage Action would cascade, instead Upgrade 1 Explorer/Town (before Dahan counterattack.)", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), $m_sc_StringOps$().oh("In Mining lands: Disease and modifiers to Disease affect Ravage Actions as though they were Build Actions.", 124), $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), $m_sc_StringOps$().oh("In Mining lands: During the Build Step, Build Cards cause Ravage Actions (instead of Build Actions).", 124), $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Add 1 Explorer in each land with no Dahan. Add 1 Disease and 1 City in the highest-numbered land with a Town Setup symbol.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage(), "On each board: Choose a land with Explorer. Upgrade 1 Explorer there.", new $c_s_Some(5)), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Remove the Stage II 'Coastal Lands' card before randomly choosing Stage II cards. Place the 'Salt Deposits' card in place of the 2nd Stage II card.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-2S22-33333, where S is the Salt Deposits card. Escalation ignores S", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__AfterBuild__Ladversaries_Stage(), "On each board: Choose a land with Explorer. Build there, then Upgrade 1 Explorer. (Build normally in a Mining land.)", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "On boards with 3 or fewer Blight: Add +1 Explorer in each land successfully explored. (Max. 2 lands per board per Explore Card.)", $m_s_None$())]))), new $c_s_Some("At the end of the Fast Power Phase, the Invaders win if any land has at least 8 total Invaders/Blight (combined)."), "After Advancing Invader Cards: On each board, Explore in 2 lands whose terrains don't match a Ravage or Build Card (no source required).", $m_sci_Nil$().cd($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["9 (3/3/3)", "10 (3/3/4)", "11 (3/4/4)", "12 (4/4/4)", "13 (4/5/4)", "13 (4/5/4)"])))));
  this.jN = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Russia", $m_sci_Vector$().bc($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "On each board, add 1 Beasts and 1 Explorer to the highest-numbered land without Town/City", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Explorer do +1 Damage. When Ravage adds Blight to a land (including cascades), Destroy 1 Beasts in that land.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__RuleChange__Ladversaries_Stage(), "The first time each Action would Destroy Explorer: If possible, 1 of those Explorer is instead Pushed; 1 Fear when you do so.", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "Ravage Cards also match lands with 3 or more Explorer. (If the land already matched the Ravage Card, it still Ravages just once.)", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-2-3-2-3-2-3-2-33", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Setup__Ladversaries_Stage(), "Put an unused Stage II Invader Card under the top 3 Fear Cards, and an unused Stage III Card under the top 7 Fear Cards.", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "When a face down invader card in the fear deck is revealed, immediately place it in the Build space (face-up).", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "After the Ravage Step of turn 2+, on each board where it added no Blight: In the land with the most Explorer (min. 1), add 1 Explorer and 1 Town.", $m_s_None$())]))), new $c_s_Some("Put Beasts Destroyed by Adversary rules on this panel. If there are ever more Beasts on this panel than on the island, the Invaders win."), "Add 2 Explorer (total) among lands with Beasts. If you can't, instead add 2 Explorer among lands with Beasts on a different board.", $m_sci_Nil$().cd($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["10 (3/3/4)", "11 (4/3/4)", "11 (4/4/3)", "12 (4/4/4)", "13 (4/5/4)", "14 (5/5/4)"])))));
  this.jO = ($m_Ladversaries_Adversary$(), new $c_Ladversaries_Adversary("Scotland", $m_sci_Vector$().bc($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Rule.r().C)([new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "111-22222-3333", $m_s_None$()), new $c_Ladversaries_Rule(1, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "After Setup, in Coastal lands, Explore Cards add 1 Town instead of 1 Explorer . \"Coastal Lands\" Invader cards do this for maximum 2 lands per board.", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__Explore__Ladversaries_Stage(), "Add 1 City to land #2. Place \"Coastal Lands\" as the 3rd Stage II card, and move the two Stage II Cards above it up by one. ", $m_s_None$()), new $c_Ladversaries_Rule(2, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-22-1-C2-33333", $m_s_None$()), new $c_Ladversaries_Rule(3, $s_Ladversaries_Stage$__Build__Ladversaries_Stage(), "In Coastal lands, Build Cards affect lands without Invaders, so long as there is an adjacent City.", $m_s_None$()), new $c_Ladversaries_Rule(4, $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage(), "11-22-3-C2-3333", $m_s_None$()), new $c_Ladversaries_Rule(5, $s_Ladversaries_Stage$__Ravage__Ladversaries_Stage(), "After a Ravage Action adds Blight to a Coastal Land, add 1 Blight to that board's Ocean (without cascading). Treat the Ocean as a Coastal Wetland for this rule and for Blight removal/movement.", $m_s_None$()), new $c_Ladversaries_Rule(6, $s_Ladversaries_Stage$__AfterRavage__Ladversaries_Stage(), "Add 1 Town to each Inland land that matches a Ravage card and is within 1 Range of Town/City.", $m_s_None$())]))), new $c_s_Some("If the number of Coastal lands with City is ever greater than (2 x # of boards), the Invaders win."), "On the single board with the most Coastal Town/City, add 1 Town to the N lands with the fewest Town (N = # of players.)", $m_sci_Nil$().cd($m_sr_ScalaRunTime$().A(new ($d_T.r().C)(["10 (3/4/3)", "11 (4/4/3)", "13 (4/5/4)", "14 (5/5/4)", "15 (5/6/4)", "16 (6/6/4)"])))));
  this.jI = $m_sci_Nil$().cd($m_sr_ScalaRunTime$().A(new ($d_Ladversaries_Adversary.r().C)([this.hm, this.jJ, this.jP, this.jK, this.jM, this.jL, this.jN, this.jO])));
}
$p = $c_Ladversaries_Adversary$.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Adversary$;
/** @constructor */
function $h_Ladversaries_Adversary$() {
}
$h_Ladversaries_Adversary$.prototype = $p;
var $d_Ladversaries_Adversary$ = new $TypeData().i($c_Ladversaries_Adversary$, "adversaries.Adversary$", ({
  cA: 1,
  ay: 1,
  co: 1
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
  cC: 1,
  ay: 1,
  cp: 1
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
  this.ho = null;
  this.jQ = null;
  this.jR = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.ho = $m_scm_Buffer$().n0($m_sr_ScalaRunTime$().A(new ($d_F1.r().C)([])));
  this.jQ = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    try {
      console.error(((this.eg(err) + "\n") + this.q8(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.jR = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.ax : $x_1);
  }));
  this.qV(this.jQ);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.eg = (function(e) {
  try {
    var errorMessage = e.g3();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).jg() + ": ") + errorMessage);
});
$p.q8 = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().rz(err.q9()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.pt = (function(message, cause) {
  return ((message + "; cause: ") + (cause.d() ? $m_s_None$() : new $c_s_Some(this.eg(cause.O()))));
});
$p.qV = (function(fn) {
  this.ho.aU(fn);
});
$p.ce = (function(err) {
  var this$1 = this.ho;
  var it = this$1.j();
  while (it.l()) {
    var x0 = it.h();
    try {
      x0.e(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.jR;
      if (((x0 === null) ? (x$2 === null) : x0.k(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().rh(0.0, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  cI: 1,
  ay: 1,
  cp: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.cA(true);
  $thiz.g6((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().oo(onNext, $m_s_PartialFunction$().gE, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.g5()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.g5()) {
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
  var x = $thiz.ek();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_F0.r().C)([])));
    $thiz.g6(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aC: 1,
  as: 1,
  a5: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.pk(value));
}
function $f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($thiz, nodes, renderableSeq) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element) => {
    ($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(nodes, null, null)).az(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((element$2) => ((_$9) => {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().eO(element$2, _$9, (void 0));
    }))(element)));
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.kK = null;
  this.kL = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.qP = (function() {
  if ((!this.kL)) {
    this.kK = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.kL = true;
  }
  return this.kK;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  dk: 1,
  be: 1,
  dy: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.lB = null;
  this.hQ = null;
  this.lB = key;
  this.hQ = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.cv = (function(element) {
  if ((!this.hQ.d())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.lB, null, this.hQ, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  e3: 1,
  V: 1,
  bl: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.ev = null;
  this.hR = null;
  this.hS = null;
  this.ev = eventProcessor;
  this.hR = ((ev) => {
    var processor = eventProcessor.fl;
    var this$2 = processor.e(ev);
    if ((!this$2.d())) {
      callback.e(this$2.O());
    }
  });
  this.hS = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw new $c_jl_NullPointerException();
    }
    this$3.capture = outer.ev.fm;
    this$3.passive = outer.ev.gt;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.cv = (function(element) {
  this.pn(element, false);
});
$p.pn = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().oZ(element.bh, this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.hP, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().qY(element.bh, this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().rt(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gd(element.cf, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().oi(element.cf, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner$1) => {
      activate.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.v = (function() {
  return (("EventListener(" + this.ev.dZ.fn) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  e4: 1,
  V: 1,
  bk: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.lD = null;
  this.lE = null;
  this.lC = null;
  this.lD = key;
  this.lE = value;
  this.lC = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.cv = (function(element) {
  this.lC.iT(element, this.lD, this.lE);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  e5: 1,
  V: 1,
  bl: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeyUpdater(key, values, update) {
  this.lF = null;
  this.lH = null;
  this.lG = null;
  this.lF = key;
  this.lH = values;
  this.lG = update;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeyUpdater;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeyUpdater() {
}
$h_Lcom_raquo_laminar_modifiers_KeyUpdater.prototype = $p;
$p.cv = (function(element) {
  this.iY(element);
});
$p.iY = (function(element) {
  element.qN(this.lF);
  var observable = this.lH;
  var onNext = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    this.lG.iT(element, value, this);
  }));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().ri(element.cf, observable, onNext);
});
var $d_Lcom_raquo_laminar_modifiers_KeyUpdater = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeyUpdater, "com.raquo.laminar.modifiers.KeyUpdater", ({
  e6: 1,
  V: 1,
  bk: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.hX = null;
  this.lN = null;
  this.lO = null;
  this.lN = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().qq(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.lO = container;
  this.qy();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.h2 = (function() {
  return this.hX;
});
$p.nh = (function(x$0) {
  this.hX = x$0;
});
$p.qy = (function() {
  this.hX.mO();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().eO(this, this.lN, (void 0));
});
$p.aA = (function() {
  return this.lO;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  en: 1,
  au: 1,
  bm: 1
}));
function $isArrayOf_Lcom_raquo_laminar_tags_CustomHtmlTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eq)));
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.a2.Z) {
    return ($thiz.a2.Q().jg() + "[]");
  } else {
    var name = $thiz.a2.N;
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
  this.i1 = null;
  this.a2 = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.v = (function() {
  return ((this.a2.Y ? "interface " : (this.a2.X ? "" : "class ")) + this.a2.N);
});
$p.jg = (function() {
  if ((this.i1 === null)) {
    this.i1 = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.i1;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  ez: 1,
  a: 1,
  Z: 1
}));
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().i($c_jl_Exception, "java.lang.Exception", ({
  D: 1,
  u: 1,
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
  this.oD = null;
  $n_s_Predef$ = this;
  this.oD = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.r5 = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  fh: 1,
  fa: 1,
  fb: 1
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
      return $thiz.bn();
      break;
    }
    case 1: {
      return $thiz.bj();
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.eA = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.eA = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.bz = (function() {
  return this.eA.nn($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aK = (function(it) {
  return this.eA.j8(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aV = (function() {
  return this.eA.h8($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.cX = (function(elems) {
  return this.eA.j8(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.eC = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.eC = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.bz = (function() {
  return this.eC.bz();
});
$p.aK = (function(it) {
  return this.eC.aK(it);
});
$p.aV = (function() {
  return this.eC.aV();
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
$p.e = (function(v1) {
  return this;
});
var $d_sc_IterableOnceOps$$anon$1 = new $TypeData().i($c_sc_IterableOnceOps$$anon$1, "scala.collection.IterableOnceOps$$anon$1", ({
  fE: 1,
  aW: 1,
  e: 1
}));
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.y();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.j();
      while (it.l()) {
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
  return new $c_sc_Iterator$ConcatIterator($thiz).iZ(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().G : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.j();
  while (($thiz.l() && those.l())) {
    if ((!$m_sr_BoxesRunTime$().p($thiz.h(), those.h()))) {
      return false;
    }
  }
  return ($thiz.l() === those.l());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.G = null;
  $n_sc_Iterator$ = this;
  this.G = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.aV = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.bz = (function() {
  return this.G;
});
$p.aK = (function(source) {
  return source.j();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  fF: 1,
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
  $thiz.im = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.im = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.aK = (function(it) {
  return this.im.aK(it);
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
$p.nA = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((x3) => (() => x3.j()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().ja(it))));
});
$p.aV = (function() {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((it$2$2) => $m_sc_View$().nA(it$2$2))));
});
$p.bz = (function() {
  return $m_sc_View$Empty$();
});
$p.aK = (function(source) {
  return this.nA(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  fV: 1,
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
  this.af = 0;
  this.au = 0;
  this.aH = null;
  this.bE = null;
  this.b2 = 0;
  this.br = 0;
  this.af = dataMap;
  this.au = nodeMap;
  this.aH = content;
  this.bE = originalHashes;
  this.b2 = size;
  this.br = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.aL = (function() {
  return this.b2;
});
$p.dM = (function() {
  return this.br;
});
$p.dO = (function(index) {
  return this.aH.a[(index << 1)];
});
$p.d1 = (function(index) {
  return this.aH.a[((1 + (index << 1)) | 0)];
});
$p.je = (function(index) {
  return new $c_T2(this.aH.a[(index << 1)], this.aH.a[((1 + (index << 1)) | 0)]);
});
$p.g2 = (function(index) {
  return this.bE.a[index];
});
$p.cy = (function(index) {
  return this.aH.a[(((((-1) + this.aH.a.length) | 0) - index) | 0)];
});
$p.iS = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ei(keyHash, shift);
  var bitpos = $m_sci_Node$().dL(mask);
  if (((this.af & bitpos) !== 0)) {
    var index = $m_sci_Node$().cz(this.af, mask, bitpos);
    if ($m_sr_BoxesRunTime$().p(key, this.dO(index))) {
      return this.d1(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.au & bitpos) !== 0)) {
    return this.cy($m_sci_Node$().cz(this.au, mask, bitpos)).iS(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.jd = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().ei(keyHash, shift);
  var bitpos = $m_sci_Node$().dL(mask);
  if (((this.af & bitpos) !== 0)) {
    var index = $m_sci_Node$().cz(this.af, mask, bitpos);
    return ($m_sr_BoxesRunTime$().p(key, this.dO(index)) ? this.d1(index) : f.T());
  } else {
    return (((this.au & bitpos) !== 0) ? this.cy($m_sci_Node$().cz(this.au, mask, bitpos)).jd(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.T());
  }
});
$p.j0 = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ei(keyHash, shift);
  var bitpos = $m_sci_Node$().dL(mask);
  if (((this.af & bitpos) !== 0)) {
    var index = $m_sci_Node$().cz(this.af, mask, bitpos);
    return ((this.bE.a[index] === originalHash) && $m_sr_BoxesRunTime$().p(key, this.dO(index)));
  } else {
    return (((this.au & bitpos) !== 0) && this.cy($m_sci_Node$().cz(this.au, mask, bitpos)).j0(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.ol = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().ei(keyHash, shift);
  var bitpos = $m_sci_Node$().dL(mask);
  if (((this.af & bitpos) !== 0)) {
    var index = $m_sci_Node$().cz(this.af, mask, bitpos);
    var key0 = this.dO(index);
    var key0UnimprovedHash = this.g2(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().p(key0, key))) {
      if (replaceValue) {
        var value0 = this.d1(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.pA(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.d1(index);
      var key0Hash = $m_sc_Hashing$().cl(key0UnimprovedHash);
      return this.py(bitpos, key0Hash, this.js(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.au & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cz(this.au, mask, bitpos);
    var subNode = this.cy(index$2);
    var subNodeNew$2 = subNode.om(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.pz(bitpos, subNode, subNodeNew$2));
  } else {
    return this.px(bitpos, key, originalHash, keyHash, value);
  }
});
$p.js = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().bc($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().ei(keyHash0, shift);
    var mask1 = $m_sci_Node$().ei(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().dL(mask0) | $m_sci_Node$().dL(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().dL(mask0);
      var node = this.js(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().i8, node.aL(), node.dM());
    }
  }
});
$p.jh = (function() {
  return (this.au !== 0);
});
$p.ju = (function() {
  return $m_jl_Integer$().cw(this.au);
});
$p.h5 = (function() {
  return (this.af !== 0);
});
$p.jz = (function() {
  return $m_jl_Integer$().cw(this.af);
});
$p.fZ = (function(bitpos) {
  return $m_jl_Integer$().cw((this.af & (((-1) + bitpos) | 0)));
});
$p.jv = (function(bitpos) {
  return $m_jl_Integer$().cw((this.au & (((-1) + bitpos) | 0)));
});
$p.pA = (function(bitpos, newKey, newValue) {
  var dataIx = this.fZ(bitpos);
  var idx = (dataIx << 1);
  var src = this.aH;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.w(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.af, this.au, dst, this.bE, this.b2, this.br);
});
$p.pz = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + this.aH.a.length) | 0) - this.jv(bitpos)) | 0);
  var src = this.aH;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.w(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.af, this.au, dst, this.bE, ((((this.b2 - oldNode.aL()) | 0) + newNode.aL()) | 0), ((((this.br - oldNode.dM()) | 0) + newNode.dM()) | 0));
});
$p.px = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.fZ(bitpos);
  var idx = (dataIx << 1);
  var src = this.aH;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.w(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.w(idx, dst, destPos, length);
  var dstHashes = this.ql(this.bE, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.af | bitpos), this.au, dst, dstHashes, ((1 + this.b2) | 0), ((this.br + keyHash) | 0));
});
$p.qx = (function(bitpos, keyHash, node) {
  var dataIx = this.fZ(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aH.a.length) | 0) - this.jv(bitpos)) | 0);
  var src = this.aH;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.w(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.w(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.w(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.o8(this.bE, dataIx);
  this.af = (this.af ^ bitpos);
  this.au = (this.au | bitpos);
  this.aH = dst;
  this.bE = dstHashes;
  this.b2 = (((((-1) + this.b2) | 0) + node.aL()) | 0);
  this.br = ((((this.br - keyHash) | 0) + node.dM()) | 0);
  return this;
});
$p.py = (function(bitpos, keyHash, node) {
  var dataIx = this.fZ(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + this.aH.a.length) | 0) - this.jv(bitpos)) | 0);
  var src = this.aH;
  var dst = new $ac_O((((-1) + src.a.length) | 0));
  src.w(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.w(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + ((src.a.length - idxNew) | 0)) | 0);
  src.w(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.o8(this.bE, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.af ^ bitpos), (this.au | bitpos), dst, dstHashes, (((((-1) + this.b2) | 0) + node.aL()) | 0), ((((this.br - keyHash) | 0) + node.dM()) | 0));
});
$p.az = (function(f) {
  var iN = $m_jl_Integer$().cw(this.af);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.e(this.je(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().cw(this.au);
  var j = 0;
  while ((j < jN)) {
    this.cy(j).az(f);
    j = ((1 + j) | 0);
  }
});
$p.ef = (function(f) {
  var iN = $m_jl_Integer$().cw(this.af);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.ec(this.dO(i$1), this.d1(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().cw(this.au);
  var j = 0;
  while ((j < jN)) {
    this.cy(j).ef(f);
    j = ((1 + j) | 0);
  }
});
$p.k = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.br === that.br) && (this.au === that.au)) && (this.af === that.af)) && (this.b2 === that.b2)) && $m_ju_Arrays$().j4(this.bE, that.bE))) {
      var a1 = this.aH;
      var a2 = that.aH;
      var length = this.aH.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().p(a1.a[i], a2.a[i]);
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
$p.r = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.ni = (function() {
  var this$1 = this.aH;
  var contentClone = this$1.i();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().cw(this.af) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].nj();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.af, this.au, contentClone, this.bE.i(), this.b2, this.br);
});
$p.nj = (function() {
  return this.ni();
});
$p.om = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.ol(key, value, originalHash, hash, shift, replaceValue);
});
$p.jc = (function(index) {
  return this.cy(index);
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bS)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  bS: 1,
  c2: 1,
  aR: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.is = 0;
  this.di = 0;
  this.av = null;
  this.is = originalHash;
  this.di = hash;
  this.av = content;
  $m_s_Predef$().r5((this.av.m() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.eT = (function(key) {
  var iter = this.av.j();
  var i = 0;
  while (iter.l()) {
    if ($m_sr_BoxesRunTime$().p(iter.h().bn(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.aL = (function() {
  return this.av.m();
});
$p.iS = (function(key, originalHash, hash, shift) {
  var this$1 = this.q3(key, originalHash, hash, shift);
  if (this$1.d()) {
    $m_sc_Iterator$().G.h();
    throw new $c_jl_ClassCastException();
  } else {
    return this$1.O();
  }
});
$p.q3 = (function(key, originalHash, hash, shift) {
  if ((this.di === hash)) {
    var index = this.eT(key);
    return ((index >= 0) ? new $c_s_Some(this.av.t(index).bj()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.jd = (function(key, originalHash, hash, shift, f) {
  if ((this.di === hash)) {
    var x1 = this.eT(key);
    return ((x1 === (-1)) ? f.T() : this.av.t(x1).bj());
  } else {
    return f.T();
  }
});
$p.j0 = (function(key, originalHash, hash, shift) {
  return ((this.di === hash) && (this.eT(key) >= 0));
});
$p.om = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.eT(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.av.t(index).bj(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.av.dR(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.av.bk(new $c_T2(key, value))));
});
$p.jh = (function() {
  return false;
});
$p.ju = (function() {
  return 0;
});
$p.cy = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.h5 = (function() {
  return true;
});
$p.jz = (function() {
  return this.av.m();
});
$p.dO = (function(index) {
  return this.av.t(index).bn();
});
$p.d1 = (function(index) {
  return this.av.t(index).bj();
});
$p.je = (function(index) {
  return this.av.t(index);
});
$p.g2 = (function(index) {
  return this.is;
});
$p.az = (function(f) {
  this.av.az(f);
});
$p.ef = (function(f) {
  this.av.az(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bn();
      var v = x0$1$2$2.bj();
      return f.ec(k, v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  })));
});
$p.k = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.di === that.di) && (this.av.m() === that.av.m()))) {
      var iter = this.av.j();
      while (iter.l()) {
        var x1$2 = iter.h();
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = x1$2.bn();
        var value = x1$2.bj();
        var index = that.eT(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().p(value, that.av.t(index).bj())))) {
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
$p.r = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.dM = (function() {
  return Math.imul(this.av.m(), this.di);
});
$p.nj = (function() {
  return new $c_sci_HashCollisionMapNode(this.is, this.di, this.av);
});
$p.jc = (function(index) {
  return this.cy(index);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bU)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  bU: 1,
  c2: 1,
  aR: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.it = null;
  $n_sci_HashMap$ = this;
  this.it = new $c_sci_HashMap($m_sci_MapNode$().mo);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.pY = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().iR(source).jB());
});
$p.aK = (function(it) {
  return this.pY(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  g3: 1,
  aL: 1,
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
function $c_sci_LazyList$State$Cons(head, tail) {
  this.ml = null;
  this.mm = null;
  this.ml = head;
  this.mm = tail;
}
$p = $c_sci_LazyList$State$Cons.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $p;
$p.u = (function() {
  return this.ml;
});
$p.b0 = (function() {
  return this.mm;
});
var $d_sci_LazyList$State$Cons = new $TypeData().i($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  ge: 1,
  bX: 1,
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
$p.ji = (function() {
  throw new $c_ju_NoSuchElementException("head of empty lazy list");
});
$p.b0 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$p.u = (function() {
  this.ji();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().i($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  gf: 1,
  bX: 1,
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
$p.q0 = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.d()) {
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
  return new $c_sci_MapBuilderImpl().mP(it).oa();
});
$p.aK = (function(it) {
  return this.q0(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  gi: 1,
  aL: 1,
  a: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.y();
  if ((x1 !== (-1))) {
    var that = ((x1 + delta) | 0);
    $thiz.bf(((that < 0) ? 0 : that));
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
$p.q1 = (function(it) {
  var k = it.y();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).mR(it);
});
$p.aV = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.bz = (function() {
  return $ct_scm_HashSet__(new $c_scm_HashSet());
});
$p.aK = (function(source) {
  return this.q1(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  gV: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hb)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(f) {
  this.mC = null;
  this.mC = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855() {
}
$h_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855.prototype = $p;
$p.T = (function() {
  return (0, this.mC)();
});
var $d_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855 = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855, "scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855", ({
  hB: 1,
  cq: 1,
  aH: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(f) {
  this.mD = null;
  this.mD = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28() {
}
$h_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28.prototype = $p;
$p.e = (function(x0) {
  return (0, this.mD)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28, "scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28", ({
  hC: 1,
  aW: 1,
  e: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(f) {
  this.mE = null;
  this.mE = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc() {
}
$h_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc.prototype = $p;
$p.ec = (function(x0, x1) {
  return (0, this.mE)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc, "scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc", ({
  hD: 1,
  cr: 1,
  aI: 1
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
$p.e = (function(x) {
  return this.bx(x, $m_s_PartialFunction$().gE);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  hL: 1,
  u: 1,
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
$p.nE = (function(f) {
  return ((arg1$2) => f.e(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  hS: 1,
  hT: 1,
  hU: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ib)));
}
/** @constructor */
function $c_LMain$AdversarySelector(adversary, level) {
  this.bW = null;
  this.bB = 0;
  this.bW = adversary;
  this.bB = level;
}
$p = $c_LMain$AdversarySelector.prototype = new $h_O();
$p.constructor = $c_LMain$AdversarySelector;
/** @constructor */
function $h_LMain$AdversarySelector() {
}
$h_LMain$AdversarySelector.prototype = $p;
$p.be = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().g(acc, $f_T__hashCode__I("AdversarySelector"));
  acc = $m_sr_Statics$().g(acc, $m_sr_Statics$().N(this.bW));
  acc = $m_sr_Statics$().g(acc, this.bB);
  return $m_sr_Statics$().C(acc, 2);
});
$p.k = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_LMain$AdversarySelector)) {
    if ((this.bB === x$0.bB)) {
      var x = this.bW;
      var x$2 = x$0.bW;
      return ((x === null) ? (x$2 === null) : x.k(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().eM(this);
});
$p.aW = (function() {
  return 2;
});
$p.aY = (function() {
  return "AdversarySelector";
});
$p.aX = (function(n) {
  if ((n === 0)) {
    return this.bW;
  }
  if ((n === 1)) {
    return this.bB;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_LMain$AdversarySelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aX)));
}
var $d_LMain$AdversarySelector = new $TypeData().i($c_LMain$AdversarySelector, "Main$AdversarySelector", ({
  aX: 1,
  d: 1,
  B: 1,
  a: 1
}));
/** @constructor */
function $c_Ladversaries_Adversary(name, rules, lossCondition, escalation, fear) {
  this.f8 = null;
  this.eo = null;
  this.f7 = null;
  this.f5 = null;
  this.f6 = null;
  this.f8 = name;
  this.eo = rules;
  this.f7 = lossCondition;
  this.f5 = escalation;
  this.f6 = fear;
}
$p = $c_Ladversaries_Adversary.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Adversary;
/** @constructor */
function $h_Ladversaries_Adversary() {
}
$h_Ladversaries_Adversary.prototype = $p;
$p.be = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().cB(this, (-889275714), false);
});
$p.k = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ladversaries_Adversary)) {
    if ((this.f8 === x$0.f8)) {
      var x = this.eo;
      var x$2 = x$0.eo;
      var $x_2 = ((x === null) ? (x$2 === null) : x.k(x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.f7;
      var x$4 = x$0.f7;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : x$3.k(x$4));
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.f5 === x$0.f5))) {
      var x$5 = this.f6;
      var x$6 = x$0.f6;
      return ((x$5 === null) ? (x$6 === null) : x$5.k(x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().eM(this);
});
$p.aW = (function() {
  return 5;
});
$p.aY = (function() {
  return "Adversary";
});
$p.aX = (function(n) {
  switch (n) {
    case 0: {
      return this.f8;
      break;
    }
    case 1: {
      return this.eo;
      break;
    }
    case 2: {
      return this.f7;
      break;
    }
    case 3: {
      return this.f5;
      break;
    }
    case 4: {
      return this.f6;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Ladversaries_Adversary(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aY)));
}
var $d_Ladversaries_Adversary = new $TypeData().i($c_Ladversaries_Adversary, "adversaries.Adversary", ({
  aY: 1,
  d: 1,
  B: 1,
  a: 1
}));
/** @constructor */
function $c_Ladversaries_Rule(level, stage, text, removeAboveLevel) {
  this.cE = 0;
  this.cF = null;
  this.dU = null;
  this.dT = null;
  this.cE = level;
  this.cF = stage;
  this.dU = text;
  this.dT = removeAboveLevel;
}
$p = $c_Ladversaries_Rule.prototype = new $h_O();
$p.constructor = $c_Ladversaries_Rule;
/** @constructor */
function $h_Ladversaries_Rule() {
}
$h_Ladversaries_Rule.prototype = $p;
$p.be = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().g(acc, $f_T__hashCode__I("Rule"));
  acc = $m_sr_Statics$().g(acc, this.cE);
  acc = $m_sr_Statics$().g(acc, $m_sr_Statics$().N(this.cF));
  acc = $m_sr_Statics$().g(acc, $m_sr_Statics$().N(this.dU));
  acc = $m_sr_Statics$().g(acc, $m_sr_Statics$().N(this.dT));
  return $m_sr_Statics$().C(acc, 4);
});
$p.k = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ladversaries_Rule)) {
    if ((this.cE === x$0.cE)) {
      var x = this.cF;
      var x$2 = x$0.cF;
      var $x_1 = (x === x$2);
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.dU === x$0.dU))) {
      var x$3 = this.dT;
      var x$4 = x$0.dT;
      return ((x$3 === null) ? (x$4 === null) : x$3.k(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().eM(this);
});
$p.aW = (function() {
  return 4;
});
$p.aY = (function() {
  return "Rule";
});
$p.aX = (function(n) {
  switch (n) {
    case 0: {
      return this.cE;
      break;
    }
    case 1: {
      return this.cF;
      break;
    }
    case 2: {
      return this.dU;
      break;
    }
    case 3: {
      return this.dT;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Ladversaries_Rule(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aZ)));
}
var $d_Ladversaries_Rule = new $TypeData().i($c_Ladversaries_Rule, "adversaries.Rule", ({
  aZ: 1,
  d: 1,
  B: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.jU = null;
  this.jS = false;
  this.hp = null;
  this.jT = null;
  this.jU = onNextParam$2;
  this.jS = handleObserverErrors$3;
  this.hp = onErrorParam$2;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.jT = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.ej = (function() {
  return this.jT;
});
$p.ee = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eV = (function(nextValue) {
  try {
    this.jU.e(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.jS) {
      this.g8(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().ce(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.g8 = (function(error) {
  try {
    if (this.hp.bV(error)) {
      this.hp.e(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().ce(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().ce(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.eW = (function(nextValue) {
  nextValue.ck(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((error) => {
    this.g8(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue$2) => {
    this.eV(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  cK: 1,
  as: 1,
  a5: 1,
  aC: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.hq = null;
  this.jV = false;
  this.jW = null;
  this.hq = onTryParam$2;
  this.jV = handleObserverErrors$4;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.jW = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.ej = (function() {
  return this.jW;
});
$p.ee = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.eV = (function(nextValue) {
  this.eW(new $c_s_util_Success(nextValue));
});
$p.g8 = (function(error) {
  this.eW(new $c_s_util_Failure(error));
});
$p.eW = (function(nextValue) {
  try {
    if (this.hq.bV(nextValue)) {
      this.hq.e(nextValue);
    } else {
      nextValue.ck(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().ce(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.jV && nextValue.nM())) {
      this.g8(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.ck(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().ce(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().ce(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  cL: 1,
  as: 1,
  a5: 1,
  aC: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.kM = null;
  this.kN = false;
  this.oq = null;
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
$p.rl = (function() {
  if ((!this.kN)) {
    this.kM = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.kN = true;
  }
  return this.kM;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  dl: 1,
  dJ: 1,
  dv: 1,
  dx: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.s = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.s = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  dq: 1,
  bc: 1,
  bg: 1,
  bb: 1
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
  this.lu = null;
  this.lw = false;
  this.lv = null;
  this.hI = null;
  this.lu = initialContext;
  this.lw = preferStrictMode;
  this.lv = insertFn;
  this.hI = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.iY = (function(element) {
  var this$1 = this.lu;
  var insertContext = (this$1.d() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().r6(element, this.lw, this.hI) : this$1.O());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mountContext) => this.lv.iT(insertContext, mountContext.hP, this.hI)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().gd(element.cf, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.cv = (function(element) {
  this.iY(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  dM: 1,
  V: 1,
  dQ: 1,
  dN: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.gu = name;
  $thiz.gv = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.gu = null;
  this.gv = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.iN = (function(values, ev) {
  return new $c_Lcom_raquo_laminar_modifiers_KeyUpdater(this, values.f0(), new $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((el, v, _$1) => {
    $m_Lcom_raquo_laminar_DomApi$().rb(el, this, v);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.lL = null;
  this.hT = null;
  this.lL = $m_s_None$();
  this.hT = $m_Lcom_raquo_laminar_DomApi$().pB(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.gb = (function(maybeNextParent) {
  this.lL = maybeNextParent;
});
$p.ge = (function(maybeNextParent) {
});
$p.cv = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eO(parentNode, this, (void 0));
});
$p.aA = (function() {
  return this.hT;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  ei: 1,
  au: 1,
  V: 1,
  aE: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.lP = null;
  this.hY = null;
  this.lP = $m_s_None$();
  this.hY = $m_Lcom_raquo_laminar_DomApi$().pE(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.gb = (function(maybeNextParent) {
  this.lP = maybeNextParent;
});
$p.ge = (function(maybeNextParent) {
});
$p.cv = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eO(parentNode, this, (void 0));
});
$p.ro = (function() {
  return this.hY.data;
});
$p.aA = (function() {
  return this.hY;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  eo: 1,
  au: 1,
  V: 1,
  aE: 1
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
  ew: 1,
  a: 1,
  a2: 1,
  Z: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bo)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  bo: 1,
  a: 1,
  a2: 1,
  Z: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eF)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eG)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.n = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException();
  }
  $thiz.n = str;
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
  this.n = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.mU = (function(str) {
  var str$1 = $m_jl_String$().qA(str, 0, str.a.length);
  this.n = (("" + this.n) + str$1);
  return this;
});
$p.v = (function() {
  return this.n;
});
$p.m = (function() {
  return this.n.length;
});
$p.nd = (function(index) {
  return this.n.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  eQ: 1,
  aF: 1,
  et: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eT)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eW)));
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
$p.bx = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.v = (function() {
  return "<function1>";
});
$p.bV = (function(x) {
  return false;
});
$p.iU = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.e = (function(v1) {
  this.iU(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  fg: 1,
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
$p.j = (function() {
  return this;
});
$p.iZ = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.cY = (function(n) {
  return this.eY(n, (-1));
});
$p.eY = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.v = (function() {
  return "<iterator>";
});
$p.by = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.gZ = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.dI = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.y = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Iterable$() {
  this.eC = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$());
}
$p = $c_sc_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sc_Iterable$;
/** @constructor */
function $h_sc_Iterable$() {
}
$h_sc_Iterable$.prototype = $p;
var $d_sc_Iterable$ = new $TypeData().i($c_sc_Iterable$, "scala.collection.Iterable$", ({
  fC: 1,
  bD: 1,
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
  this.im = null;
  this.mc = null;
  this.md = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.mc = $ct_O__(new $c_O());
  this.md = new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sc_Map$().mc));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  fN: 1,
  fO: 1,
  aL: 1,
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
  $thiz.d9 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.d9 = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.n0 = (function(elems) {
  return this.d9.cX(elems);
});
$p.pM = (function() {
  return this.d9.bz();
});
$p.h4 = (function(it) {
  return this.d9.aK(it);
});
$p.aV = (function() {
  return this.d9.aV();
});
$p.aK = (function(source) {
  return this.h4(source);
});
$p.bz = (function() {
  return this.pM();
});
$p.cX = (function(elems) {
  return this.n0(elems);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cx(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => x$2$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.eS(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.bd(idx) > 0));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bd(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.y();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.y();
    var $x_1 = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.j(), that);
  } else {
    return false;
  }
}
function $f_sc_StrictOptimizedIterableOps__collect__s_PartialFunction__O($thiz, pf) {
  var b = $thiz.bq().aV();
  var marker = $m_sr_Statics$PFMarker$();
  var it = $thiz.j();
  while (it.l()) {
    var elem = it.h();
    var v = pf.bx(elem, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((marker) => ((x$2$2) => marker))(marker)));
    if ((marker !== v)) {
      b.aU(v);
    }
  }
  return b.ba();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.eC = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.pZ = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.aK.call(this, it));
});
$p.aK = (function(it) {
  return this.pZ(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  g9: 1,
  bD: 1,
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
  this.gK = null;
  this.mj = null;
  $n_sci_LazyList$ = this;
  this.gK = new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$()))).nx();
  this.mj = new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$10$2$2) => $m_sr_Statics$PFMarker$()));
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.cX = (function(elems) {
  return this.ja(elems);
});
$p.ra = (function(ll, n) {
  return new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855(((restRef, iRef) => (() => {
    var rest = restRef.ae;
    var i = iRef.aF;
    while (((i > 0) && (!rest.d()))) {
      rest = rest.E().b0();
      restRef.ae = rest;
      i = (((-1) + i) | 0);
      iRef.aF = i;
    }
    return rest.E();
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.ja = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.y() === 0) ? this.gK : new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().ob(coll.j()))))));
});
$p.oc = (function(it, suffix) {
  return (it.l() ? new $c_sci_LazyList$State$Cons(it.h(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().oc(it, suffix))))) : suffix.T());
});
$p.ob = (function(it) {
  return (it.l() ? new $c_sci_LazyList$State$Cons(it.h(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().ob(it))))) : $m_sci_LazyList$State$Empty$());
});
$p.aV = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.bz = (function() {
  return this.gK;
});
$p.aK = (function(source) {
  return this.ja(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  ga: 1,
  W: 1,
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
  this.fI = null;
  this.mw = null;
  this.fI = outer;
  this.mw = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.p6 = (function(x) {
  this.fI.aU(x);
  return this;
});
$p.oW = (function(xs) {
  this.fI.bb(xs);
  return this;
});
$p.bf = (function(size) {
  this.fI.bf(size);
});
$p.ba = (function() {
  return this.mw.e(this.fI.ba());
});
$p.bb = (function(elems) {
  return this.oW(elems);
});
$p.aU = (function(elem) {
  return this.p6(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  gS: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.dB = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.dB = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.bf = (function(size) {
});
$p.p7 = (function(elem) {
  this.dB.aU(elem);
  return this;
});
$p.oX = (function(xs) {
  this.dB.bb(xs);
  return this;
});
$p.bb = (function(elems) {
  return this.oX(elems);
});
$p.aU = (function(elem) {
  return this.p7(elem);
});
$p.ba = (function() {
  return this.dB;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  aU: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $f_sr_EnumValue__productElement__I__O($thiz, n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
}
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(f) {
  this.mH = null;
  this.mH = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1() {
}
$h_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1.prototype = $p;
$p.T = (function() {
  return (0, this.mH)();
});
var $d_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1 = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1, "scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1", ({
  i0: 1,
  hZ: 1,
  cq: 1,
  aH: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(f) {
  this.mI = null;
  this.mI = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab() {
}
$h_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab.prototype = $p;
$p.e = (function(x0) {
  return (0, this.mI)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab, "scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab", ({
  i2: 1,
  i1: 1,
  aW: 1,
  e: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(f) {
  this.mJ = null;
  this.mJ = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2() {
}
$h_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2.prototype = $p;
$p.ec = (function(x0, x1) {
  return (0, this.mJ)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2, "scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2", ({
  i4: 1,
  i3: 1,
  cr: 1,
  aI: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(f) {
  this.mK = null;
  this.mK = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491() {
}
$h_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491.prototype = $p;
$p.iT = (function(x0, x1, x2) {
  return (0, this.mK)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491, "scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491", ({
  i6: 1,
  i5: 1,
  hE: 1,
  f8: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b(f) {
  this.mL = null;
  this.mL = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b() {
}
$h_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b.prototype = $p;
$p.pe = (function(x0, x1, x2, x3) {
  return (0, this.mL)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b, "scala.scalajs.runtime.AnonFunction4.$$Lambda$06f9c6daa9fb22f000f9d0ee75fdbad9d7687b0b", ({
  i8: 1,
  i7: 1,
  hF: 1,
  f9: 1
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
  this.hk = null;
  this.hk = sel$3;
}
$p = $c_LMain$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_LMain$$anon$1;
/** @constructor */
function $h_LMain$$anon$1() {
}
$h_LMain$$anon$1.prototype = $p;
$p.jn = (function(x) {
  if ((x !== null)) {
    var x7 = x.cE;
    var x8 = x.cF;
    var x$2 = $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage();
    if ((x$2 === x8)) {
      if ((x7 <= this.hk.bB)) {
        return true;
      }
    }
  }
  return false;
});
$p.iV = (function(x, default$1) {
  if ((x !== null)) {
    var x13 = x.cE;
    var x14 = x.cF;
    var x15 = x.dU;
    var x$2 = $s_Ladversaries_Stage$__DeckOrder__Ladversaries_Stage();
    if ((x$2 === x14)) {
      if ((x13 <= this.hk.bB)) {
        return x15;
      }
    }
  }
  return default$1.e(x);
});
$p.bV = (function(x) {
  return this.jn(x);
});
$p.bx = (function(x, default$1) {
  return this.iV(x, default$1);
});
var $d_LMain$$anon$1 = new $TypeData().i($c_LMain$$anon$1, "Main$$anon$1", ({
  cy: 1,
  ap: 1,
  e: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_LMain$$anon$2(stage$2, sel$4, outer) {
  this.hl = null;
  this.f4 = null;
  this.hl = stage$2;
  this.f4 = sel$4;
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
$p.jn = (function(x) {
  if ((x !== null)) {
    var x19 = x.cE;
    var x20 = x.cF;
    var x22 = x.dT;
    var x$2 = this.hl;
    if ((x$2 === x20)) {
      if (((x19 <= this.f4.bB) && (x22.d() || ((x22.O() | 0) > this.f4.bB)))) {
        return true;
      }
    }
  }
  return false;
});
$p.iV = (function(x, default$1) {
  if ((x !== null)) {
    var x25 = x.cE;
    var x26 = x.cF;
    var x27 = x.dU;
    var x28 = x.dT;
    var x$2 = this.hl;
    if ((x$2 === x26)) {
      if (((x25 <= this.f4.bB) && (x28.d() || ((x28.O() | 0) > this.f4.bB)))) {
        return x27;
      }
    }
  }
  return default$1.e(x);
});
$p.bV = (function(x) {
  return this.jn(x);
});
$p.bx = (function(x, default$1) {
  return this.iV(x, default$1);
});
var $d_LMain$$anon$2 = new $TypeData().i($c_LMain$$anon$2, "Main$$anon$2", ({
  cz: 1,
  ap: 1,
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
$p.be = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.h0($m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.h1($m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.f3(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.h9(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.bg || (!when))) {
    var $x_1 = f();
  } else {
    this$2.bg = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.bg = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.cZ();
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
  if ((this$3.bg || (!when))) {
    f();
  } else {
    this$3.bg = true;
    try {
      f();
    } finally {
      this$3.bg = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().o9($thiz.d2(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().o9($thiz.cZ(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.hi())) {
    $thiz.he();
    $thiz.f3(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.hb();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.hc();
    $thiz.f3(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.cZ();
  var $x_1 = this$.length;
  var this$$1 = $thiz.d2();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.jZ = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.jZ = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.qp = (function(x) {
  return (x !== null);
});
$p.pj = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.jZ, x, _$1);
  }))), (void 0)) : default$1.e(x));
});
$p.bV = (function(x) {
  return this.qp(x);
});
$p.bx = (function(x, default$1) {
  return this.pj(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  cT: 1,
  ap: 1,
  e: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.op = $m_Lcom_raquo_airstream_core_Observer$().nG(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
function $f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer($thiz, mod) {
  return $m_Lcom_raquo_airstream_core_Observer$().nG(new $c_Lcom_raquo_airstream_state_Var$$anon$2(mod, $thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.ky = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.ky = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.jo = (function(x) {
  return true;
});
$p.iW = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    this.ky.jC(x, _$1);
  })));
});
$p.bV = (function(x) {
  return this.jo(x);
});
$p.bx = (function(x, default$1) {
  return this.iW(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  d9: 1,
  ap: 1,
  e: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$2(mod$6, outer) {
  this.kz = null;
  this.gr = null;
  this.kz = mod$6;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.gr = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$2;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$2() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$2.prototype = $p;
$p.jo = (function(x) {
  return true;
});
$p.iW = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((trx) => {
    matchResult5: {
      if ((x instanceof $c_s_util_Success)) {
        var nextInput = x.dG;
        var x4 = $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this.gr.fg);
        if ((x4 instanceof $c_s_util_Success)) {
          var currentValue = x4.dG;
          try {
            var nextValue = new $c_s_util_Success(this.kz.ec(currentValue, nextInput));
          } catch (e) {
            var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
            matchEnd8: {
              var nextValue;
              if ($m_s_util_control_NonFatal$().dK(e$2)) {
                var nextValue = new $c_s_util_Failure(e$2);
                break matchEnd8;
              }
              throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
            }
          }
          this.gr.jC(nextValue, trx);
          break matchResult5;
        }
        if ((x4 instanceof $c_s_util_Failure)) {
          var err = x4.dF;
          $m_Lcom_raquo_airstream_core_AirstreamError$().ce(new $c_Lcom_raquo_airstream_core_AirstreamError$VarError("Unable to update a failed Var. Consider Var#tryUpdater instead.", new $c_s_Some(err)));
          break matchResult5;
        }
        throw new $c_s_MatchError(x4);
      }
      if ((x instanceof $c_s_util_Failure)) {
        var err$2 = x.dF;
        this.gr.jC(new $c_s_util_Failure(err$2), trx);
        break matchResult5;
      }
      throw new $c_s_MatchError(x);
    }
  })));
});
$p.bV = (function(x) {
  return this.jo(x);
});
$p.bx = (function(x, default$1) {
  return this.iW(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$2 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$2, "com.raquo.airstream.state.Var$$anon$2", ({
  da: 1,
  ap: 1,
  e: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.hU = new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cf.mO();
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    $thiz.cf.pF();
  })));
  $thiz.e0 = (void 0);
  $thiz.fp = $m_sci_Map$EmptyMap$();
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.e0 === (void 0))) {
    $thiz.e0 = $m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener])));
  } else if (unsafePrepend) {
    var x$1 = $thiz.e0;
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.e0;
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
  var x = $thiz.e0;
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.e0;
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
  var keyItemsWithReason = $thiz.fp.d0(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.d())) {
      var x0 = these.u();
      var x = x0.bn();
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.bj();
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
      if (l.d()) {
        var result = $m_sci_Nil$();
        break;
      } else {
        var h = l.u();
        var t = l.x();
        if (((!(!f(h))) === true)) {
          l = t;
          continue;
        }
        var start = l;
        var remaining = t;
        while (true) {
          if (remaining.d()) {
            var result = start;
            break block;
          } else {
            var x$1 = remaining.u();
            if (((!(!f(x$1))) !== true)) {
              remaining = remaining.x();
              continue;
            }
            var firstMiss = remaining;
            var newHead = new $c_sci_$colon$colon(start.u(), $m_sci_Nil$());
            var toProcess = start.x();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.u(), $m_sci_Nil$());
              currentLast.aM = newElem;
              currentLast = newElem;
              toProcess = toProcess.x();
            }
            var next = firstMiss.x();
            var nextToCopy = next;
            while ((!next.d())) {
              var head = next.u();
              if (((!(!f(head))) !== true)) {
                next = next.x();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.u(), $m_sci_Nil$());
                  currentLast.aM = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.x();
                }
                nextToCopy = next.x();
                next = next.x();
              }
            }
            if ((!nextToCopy.d())) {
              currentLast.aM = nextToCopy;
            }
            var result = newHead;
            break block;
          }
        }
      }
    }
  }
  var this$1 = $thiz.fp.d0(key, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.ca(t$1.bn()));
  var l$1 = this$1;
  block$2: {
    var $x_3;
    while (true) {
      if (l$1.d()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$1.u();
        var t$2 = l$1.x();
        if (((!(!f$1(h$1))) === true)) {
          l$1 = t$2;
          continue;
        }
        var start$1 = l$1;
        var remaining$1 = t$2;
        while (true) {
          if (remaining$1.d()) {
            var $x_3 = start$1;
            break block$2;
          } else {
            var x$2 = remaining$1.u();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$1 = remaining$1.x();
              continue;
            }
            var firstMiss$1 = remaining$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.u(), $m_sci_Nil$());
            var toProcess$1 = start$1.x();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.u(), $m_sci_Nil$());
              currentLast$1.aM = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.x();
            }
            var next$1 = firstMiss$1.x();
            var nextToCopy$1 = next$1;
            while ((!next$1.d())) {
              var head$1 = next$1.u();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.x();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.u(), $m_sci_Nil$());
                  currentLast$1.aM = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.x();
                }
                nextToCopy$1 = next$1.x();
                next$1 = next$1.x();
              }
            }
            if ((!nextToCopy$1.d())) {
              currentLast$1.aM = nextToCopy$1;
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
    var x0$1 = itemsToAdd.u();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.x();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.u();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.aM = nx;
      t$3 = nx;
      rest = rest.x();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.mW($x_2);
  var domValues = key.hJ.nl(key.lx.e($thiz));
  var f$3 = ((elem) => result.ca(elem));
  var l$2 = domValues;
  block$4: {
    var $x_5;
    while (true) {
      if (l$2.d()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$2.u();
        var t$4 = l$2.x();
        if (((!(!f$3(h$3))) === true)) {
          l$2 = t$4;
          continue;
        }
        var start$2 = l$2;
        var remaining$2 = t$4;
        while (true) {
          if (remaining$2.d()) {
            var $x_5 = start$2;
            break block$4;
          } else {
            var x$4 = remaining$2.u();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$2 = remaining$2.x();
              continue;
            }
            var firstMiss$2 = remaining$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.u(), $m_sci_Nil$());
            var toProcess$2 = start$2.x();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.u(), $m_sci_Nil$());
              currentLast$2.aM = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.x();
            }
            var next$2 = firstMiss$2.x();
            var nextToCopy$2 = next$2;
            while ((!next$2.d())) {
              var head$2 = next$2.u();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.x();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.u(), $m_sci_Nil$());
                  currentLast$2.aM = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.x();
                }
                nextToCopy$2 = next$2.x();
                next$2 = next$2.x();
              }
            }
            if ((!nextToCopy$2.d())) {
              currentLast$2.aM = nextToCopy$2;
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
      if (l$3.d()) {
        var $x_4 = $m_sci_Nil$();
        break;
      } else {
        var h$4 = l$3.u();
        var t$5 = l$3.x();
        if (((!(!f(h$4))) === true)) {
          l$3 = t$5;
          continue;
        }
        var start$3 = l$3;
        var remaining$3 = t$5;
        while (true) {
          if (remaining$3.d()) {
            var $x_4 = start$3;
            break block$6;
          } else {
            var x$5 = remaining$3.u();
            if (((!(!f(x$5))) !== true)) {
              remaining$3 = remaining$3.x();
              continue;
            }
            var firstMiss$3 = remaining$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.u(), $m_sci_Nil$());
            var toProcess$3 = start$3.x();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.u(), $m_sci_Nil$());
              currentLast$3.aM = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.x();
            }
            var next$3 = firstMiss$3.x();
            var nextToCopy$3 = next$3;
            while ((!next$3.d())) {
              var head$3 = next$3.u();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.x();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.u(), $m_sci_Nil$());
                  currentLast$3.aM = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.x();
                }
                nextToCopy$3 = next$3.x();
                next$3 = next$3.x();
              }
            }
            if ((!nextToCopy$3.d())) {
              currentLast$3.aM = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break block$6;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.mW($x_4);
  $thiz.fp = $thiz.fp.dS(key, newItems);
  key.lz.ec($thiz, key.hJ.no(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.gy, maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.gy;
  $thiz.gy = maybeNextParent;
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.d()) && (!maybePrevParent.O().h2().bK.d()));
  var isNextParentActive = ((!maybeNextParent.d()) && (!maybeNextParent.O().h2().bK.d()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.d() ? $m_s_None$() : new $c_s_Some(maybeNextParent.O().h2())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.d()) {
    $thiz.hU.ps();
  } else {
    var x0 = maybeNextOwner.O();
    $thiz.hU.re(x0);
  }
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  eu: 1,
  E: 1,
  D: 1,
  u: 1,
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
  ex: 1,
  ab: 1,
  a: 1,
  a2: 1,
  Z: 1
}), ((x) => $isByte(x)));
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bp)));
}
var $d_jl_ClassCastException = new $TypeData().i($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  bp: 1,
  E: 1,
  D: 1,
  u: 1,
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
  br: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  eC: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  aG: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().i($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  eH: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  eI: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eK)));
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
  eL: 1,
  ab: 1,
  a: 1,
  a2: 1,
  Z: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  eU: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  eZ: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  f0: 1,
  E: 1,
  D: 1,
  u: 1,
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
$p.e = (function(x) {
  return x;
});
$p.v = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().i($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  f5: 1,
  f2: 1,
  f3: 1,
  e: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.i9)) {
    $thiz.ia = (($thiz.gD === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.i9 = true;
  }
  return $thiz.ia;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.i9) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.ia);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.gD;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.gD + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.ia = null;
    this.gD = null;
    this.i9 = false;
    this.gD = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  g3() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  fc: 1,
  E: 1,
  D: 1,
  u: 1,
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
$p.d = (function() {
  return (this === $m_s_None$());
});
$p.y = (function() {
  return (this.d() ? 0 : 1);
});
$p.j = (function() {
  return (this.d() ? $m_sc_Iterator$().G : new $c_sc_Iterator$$anon$20(this.O()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fs = 0;
  this.lZ = 0;
  this.lY = null;
  this.lY = outer;
  this.fs = 0;
  this.lZ = outer.aW();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.fs < this.lZ);
});
$p.h = (function() {
  var result = this.lY.aX(this.fs);
  this.fs = ((1 + this.fs) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  fi: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.m0 = null;
  this.m1 = null;
  this.m0 = _1;
  this.m1 = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.aW = (function() {
  return 2;
});
$p.aX = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.bn = (function() {
  return this.m0;
});
$p.bj = (function() {
  return this.m1;
});
$p.v = (function() {
  return (((("(" + this.bn()) + ",") + this.bj()) + ")");
});
$p.aY = (function() {
  return "Tuple2";
});
$p.be = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().cB(this, (-889275714), false);
});
$p.k = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().p(this.bn(), x$1.bn()) && $m_sr_BoxesRunTime$().p(this.bj(), x$1.bj()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.by)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  by: 1,
  fj: 1,
  B: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.eA = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  fx: 1,
  fw: 1,
  F: 1,
  a: 1,
  W: 1
}));
function $f_sc_IndexedSeqOps__reverse__O($thiz) {
  return $thiz.eS(new $c_sc_IndexedSeqView$Reverse($thiz));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.d())) {
    return $thiz.t(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.bU() : $thiz.v())));
  }
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.bU() + "("), ", ", ")");
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
$p.l = (function() {
  return false;
});
$p.jt = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.y = (function() {
  return 0;
});
$p.eY = (function(from, until) {
  return this;
});
$p.h = (function() {
  this.jt();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  fG: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.fu = false;
  this.m6 = null;
  this.m6 = a$1;
  this.fu = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.l = (function() {
  return (!this.fu);
});
$p.h = (function() {
  if (this.fu) {
    return $m_sc_Iterator$().G.h();
  } else {
    this.fu = true;
    return this.m6;
  }
});
$p.eY = (function(from, until) {
  return (((this.fu || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().G : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  fH: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(outer, f$1) {
  this.m9 = null;
  this.gF = false;
  this.m8 = null;
  this.il = null;
  this.m7 = null;
  this.il = outer;
  this.m7 = f$1;
  this.m9 = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.gF = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.l = (function() {
  while (true) {
    if (this.gF) {
      return true;
    } else if (this.il.l()) {
      var a = this.il.h();
      if (this.m9.gW(this.m7.e(a))) {
        this.m8 = a;
        this.gF = true;
        return true;
      }
    } else {
      return false;
    }
  }
});
$p.h = (function() {
  if (this.l()) {
    this.gF = false;
    return this.m8;
  } else {
    return $m_sc_Iterator$().G.h();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  fJ: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.gG = null;
  this.ma = null;
  this.gG = outer;
  this.ma = f$2;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.y = (function() {
  return this.gG.y();
});
$p.l = (function() {
  return this.gG.l();
});
$p.h = (function() {
  return this.ma.e(this.gG.h());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  fK: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bD instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bD;
      $thiz.bD = c.bD;
      $thiz.d7 = c.d7;
      if ((c.bZ !== null)) {
        if (($thiz.bY === null)) {
          $thiz.bY = c.bY;
        }
        c.bY.fv = $thiz.bZ;
        $thiz.bZ = c.bZ;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.bZ === null)) {
      $thiz.bD = null;
      $thiz.bY = null;
      return false;
    } else {
      $thiz.bD = $thiz.bZ.qd();
      if (($thiz.bY === $thiz.bZ)) {
        $thiz.bY = $thiz.bY.fv;
      }
      $thiz.bZ = $thiz.bZ.fv;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.d7) {
        return true;
      } else if ((($thiz.bD !== null) && $thiz.bD.l())) {
        $thiz.d7 = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.bD = null;
  this.bZ = null;
  this.bY = null;
  this.d7 = false;
  this.bD = current;
  this.bZ = null;
  this.bY = null;
  this.d7 = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.l = (function() {
  if (this.d7) {
    return true;
  } else if ((this.bD !== null)) {
    if (this.bD.l()) {
      this.d7 = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.h = (function() {
  if (this.l()) {
    this.d7 = false;
    return this.bD.h();
  } else {
    return $m_sc_Iterator$().G.h();
  }
});
$p.iZ = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.bZ === null)) {
    this.bZ = c;
    this.bY = c;
  } else {
    this.bY.fv = c;
    this.bY = c;
  }
  if ((this.bD === null)) {
    this.bD = $m_sc_Iterator$().G;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bE)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  bE: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.cJ > 0)) {
    if ($thiz.d8.l()) {
      $thiz.d8.h();
      $thiz.cJ = (((-1) + $thiz.cJ) | 0);
    } else {
      $thiz.cJ = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.bN < 0)) {
    return (-1);
  } else {
    var that = (($thiz.bN - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.d8 = null;
  this.bN = 0;
  this.cJ = 0;
  this.d8 = underlying;
  this.bN = limit;
  this.cJ = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.y = (function() {
  var size = this.d8.y();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.cJ) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.bN < 0)) {
      return dropSize;
    } else {
      var x = this.bN;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.l = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.bN !== 0) && this.d8.l());
});
$p.h = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.bN > 0)) {
    this.bN = (((-1) + this.bN) | 0);
    return this.d8.h();
  } else {
    return ((this.bN < 0) ? this.d8.h() : $m_sc_Iterator$().G.h());
  }
});
$p.eY = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.bN < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.cJ + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().G;
  } else if ((sum < 0)) {
    this.cJ = 2147483647;
    this.bN = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$SliceIterator(this.d8, (((-2147483647) + sum) | 0), rest))));
  } else {
    this.cJ = sum;
    this.bN = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  fM: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.d())) {
    len = ((1 + len) | 0);
    these = these.x();
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
  var skipped = $thiz.nm(n);
  if (skipped.d()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.u();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.d() ? 0 : 1);
    } else if (xs.d()) {
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
    } else if ((((!a.d()) && (!b.d())) && $m_sr_BoxesRunTime$().p(a.u(), b.u()))) {
      var temp$a = a.x();
      var temp$b = b.x();
      a = temp$a;
      b = temp$b;
    } else {
      return (a.d() && b.d());
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.fx = null;
  this.fx = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.l = (function() {
  return (!this.fx.d());
});
$p.h = (function() {
  var r = this.fx.u();
  this.fx = this.fx.x();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  fR: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
function $p_sc_StringOps$$anon$1__advance__T($thiz) {
  var start = $thiz.b1;
  while (true) {
    if (($thiz.b1 < $thiz.e2)) {
      var this$ = $thiz.fy;
      var i = $thiz.b1;
      var c = this$.charCodeAt(i);
      var $x_1 = (!((c === 13) || (c === 10)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.b1 = ((1 + $thiz.b1) | 0);
    } else {
      break;
    }
  }
  var end = $thiz.b1;
  if (($thiz.b1 < $thiz.e2)) {
    var this$$2 = $thiz.fy;
    var i$1 = $thiz.b1;
    var c$1 = this$$2.charCodeAt(i$1);
    $thiz.b1 = ((1 + $thiz.b1) | 0);
    if (($thiz.b1 < $thiz.e2)) {
      var this$$3 = $thiz.fy;
      var i$2 = $thiz.b1;
      var c$2 = this$$3.charCodeAt(i$2);
      var $x_2 = ((c$1 === 13) && (c$2 === 10));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      $thiz.b1 = ((1 + $thiz.b1) | 0);
    }
    if ((!$thiz.mf)) {
      end = $thiz.b1;
    }
  }
  var this$6 = $thiz.fy;
  var endIndex = end;
  return this$6.substring(start, endIndex);
}
/** @constructor */
function $c_sc_StringOps$$anon$1(\u03b4this$2, stripped$1) {
  this.e2 = 0;
  this.b1 = 0;
  this.fy = null;
  this.mf = false;
  this.fy = \u03b4this$2;
  this.mf = stripped$1;
  this.e2 = \u03b4this$2.length;
  this.b1 = 0;
}
$p = $c_sc_StringOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StringOps$$anon$1;
/** @constructor */
function $h_sc_StringOps$$anon$1() {
}
$h_sc_StringOps$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.b1 < this.e2);
});
$p.nT = (function() {
  return ((this.b1 >= this.e2) ? $m_sc_Iterator$().G.h() : $p_sc_StringOps$$anon$1__advance__T(this));
});
$p.h = (function() {
  return this.nT();
});
var $d_sc_StringOps$$anon$1 = new $TypeData().i($c_sc_StringOps$$anon$1, "scala.collection.StringOps$$anon$1", ({
  fU: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.cL === null)) {
    $thiz.cL = new $ac_I(($m_sci_Node$().fF << 1));
    $thiz.fA = new ($d_sci_Node.r().C)($m_sci_Node$().fF);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.e4 = node;
  $thiz.bO = 0;
  $thiz.fz = node.jz();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bF = ((1 + $thiz.bF) | 0);
  var cursorIndex = ($thiz.bF << 1);
  var lengthIndex = ((1 + ($thiz.bF << 1)) | 0);
  $thiz.fA.a[$thiz.bF] = node;
  $thiz.cL.a[cursorIndex] = 0;
  $thiz.cL.a[lengthIndex] = node.ju();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bF = (((-1) + $thiz.bF) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bF >= 0)) {
    var cursorIndex = ($thiz.bF << 1);
    var lengthIndex = ((1 + ($thiz.bF << 1)) | 0);
    var nodeCursor = $thiz.cL.a[cursorIndex];
    if ((nodeCursor < $thiz.cL.a[lengthIndex])) {
      var ev$1 = $thiz.cL;
      ev$1.a[cursorIndex] = ((1 + ev$1.a[cursorIndex]) | 0);
      var nextNode = $thiz.fA.a[$thiz.bF].jc(nodeCursor);
      if (nextNode.jh()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.h5()) {
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
  $thiz.bO = 0;
  $thiz.fz = 0;
  $thiz.bF = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.jh()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.h5()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.bO = 0;
  this.fz = 0;
  this.e4 = null;
  this.bF = 0;
  this.cL = null;
  this.fA = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.l = (function() {
  return ((this.bO < this.fz) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.gI = node;
  $thiz.dh = (((-1) + node.jz()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.bP = ((1 + $thiz.bP) | 0);
  $thiz.fC.a[$thiz.bP] = node;
  $thiz.fB.a[$thiz.bP] = (((-1) + node.ju()) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.bP = (((-1) + $thiz.bP) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bP >= 0)) {
    var nodeCursor = $thiz.fB.a[$thiz.bP];
    $thiz.fB.a[$thiz.bP] = (((-1) + nodeCursor) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.fC.a[$thiz.bP].jc(nodeCursor));
    } else {
      var currNode = $thiz.fC.a[$thiz.bP];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.h5()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.dh = (-1);
  $thiz.bP = (-1);
  $thiz.fB = new $ac_I(((1 + $m_sci_Node$().fF) | 0));
  $thiz.fC = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().fF) | 0));
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
  this.dh = 0;
  this.gI = null;
  this.bP = 0;
  this.fB = null;
  this.fC = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.l = (function() {
  return ((this.dh >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.eD !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.w(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.w(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.fZ(bitpos);
  var idx = (dataIx << 1);
  var src = bm.aH;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.w(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.w(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bE, dataIx, originalHash);
  bm.af = (bm.af | bitpos);
  bm.aH = dst;
  bm.bE = dstHashes;
  bm.b2 = ((1 + bm.b2) | 0);
  bm.br = ((bm.br + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.eD = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.cq = $thiz.cq.ni();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.eD = null;
  this.cq = null;
  this.cq = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().lW, $m_s_Array$EmptyArrays$().i8, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.bf = (function(size) {
});
$p.f1 = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().ei(keyHash, shift);
    var bitpos = $m_sci_Node$().dL(mask);
    if (((mapNode.af & bitpos) !== 0)) {
      var index = $m_sci_Node$().cz(mapNode.af, mask, bitpos);
      var key0 = mapNode.dO(index);
      var key0UnimprovedHash = mapNode.g2(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().p(key0, key))) {
        mapNode.aH.a[((1 + (index << 1)) | 0)] = value;
      } else {
        var value0 = mapNode.d1(index);
        var key0Hash = $m_sc_Hashing$().cl(key0UnimprovedHash);
        var subNodeNew = mapNode.js(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.qx(bitpos, key0Hash, subNodeNew);
      }
    } else if (((mapNode.au & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cz(mapNode.au, mask, bitpos);
      var subNode = mapNode.cy(index$2);
      var beforeSize = subNode.aL();
      var beforeHash = subNode.dM();
      this.f1(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.b2 = ((mapNode.b2 + ((subNode.aL() - beforeSize) | 0)) | 0);
      mapNode.br = ((mapNode.br + ((subNode.dM() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.eT(key);
    if ((index$3 < 0)) {
      mapNode.av = mapNode.av.bk(new $c_T2(key, value));
    } else {
      mapNode.av = mapNode.av.dR(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$p.jB = (function() {
  if ((this.cq.b2 === 0)) {
    return $m_sci_HashMap$().it;
  } else if ((this.eD !== null)) {
    return this.eD;
  } else {
    this.eD = new $c_sci_HashMap(this.cq);
    return this.eD;
  }
});
$p.mT = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().N(elem.bn());
  var im = $m_sc_Hashing$().cl(h);
  this.f1(this.cq, elem.bn(), elem.bj(), h, im, 0);
  return this;
});
$p.eb = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().N(key);
  this.f1(this.cq, key, value, originalHash, $m_sc_Hashing$().cl(originalHash), 0);
  return this;
});
$p.iR = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(this, xs);
  } else if (false) {
    var iter = xs.s6();
    while (iter.l()) {
      var next = iter.h();
      var originalHash = xs.rs(next.nJ());
      var hash = $m_sc_Hashing$().cl(originalHash);
      this.f1(this.cq, next.nN(), next.rx(), originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.pN();
    while (iter$2.l()) {
      var next$2 = iter$2.h();
      var originalHash$2 = xs.rs(next$2.nJ());
      var hash$2 = $m_sc_Hashing$().cl(originalHash$2);
      this.f1(this.cq, next$2.nN(), next$2.rx(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.ef(new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((key$2$2, value$2$2) => this.eb(key$2$2, value$2$2))));
  } else {
    var it = xs.j();
    while (it.l()) {
      this.mT(it.h());
    }
  }
  return this;
});
$p.bb = (function(elems) {
  return this.iR(elems);
});
$p.aU = (function(elem) {
  return this.mT(elem);
});
$p.ba = (function() {
  return this.jB();
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  g4: 1,
  a9: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.d9 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.nB = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.h4.call(this, it));
});
$p.aK = (function(source) {
  return this.nB(source);
});
$p.h4 = (function(it) {
  return this.nB(it);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  g7: 1,
  aM: 1,
  W: 1,
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
  this.eE = null;
  this.mk = null;
  this.pr();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.bf = (function(size) {
});
$p.pr = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.mk = ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.j5()))));
  this.eE = deferred;
});
$p.r9 = (function() {
  this.eE.jj(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$State$Empty$())));
  return this.mk;
});
$p.p3 = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.eE.jj(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $m_sci_LazyList$();
    return new $c_sci_LazyList$State$Cons(elem, ($m_sci_LazyList$(), new $c_sci_LazyList(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.j5())))));
  })));
  this.eE = deferred;
  return this;
});
$p.oU = (function(xs) {
  if ((xs.y() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.eE.jj(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $m_sci_LazyList$().oc(xs.j(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => deferred.j5()))))));
    this.eE = deferred;
  }
  return this;
});
$p.bb = (function(elems) {
  return this.oU(elems);
});
$p.aU = (function(elem) {
  return this.p3(elem);
});
$p.ba = (function() {
  return this.r9();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  gb: 1,
  a9: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.eF = null;
  this.eF = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.l = (function() {
  return (!this.eF.d());
});
$p.h = (function() {
  if (this.eF.d()) {
    return $m_sc_Iterator$().G.h();
  } else {
    var res = this.eF.E().u();
    this.eF = this.eF.E().b0();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  gd: 1,
  n: 1,
  o: 1,
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
$p.cX = (function(elems) {
  return $m_sci_Nil$().cd(elems);
});
$p.aV = (function() {
  return new $c_scm_ListBuffer();
});
$p.bz = (function() {
  return $m_sci_Nil$();
});
$p.aK = (function(source) {
  return $m_sci_Nil$().cd(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  gg: 1,
  ai: 1,
  W: 1,
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
  $thiz.eG = outer;
  $thiz.dk = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dk = 0;
  this.eG = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.l = (function() {
  return (this.dk < 2);
});
$p.h = (function() {
  switch (this.dk) {
    case 0: {
      var result = new $c_T2(this.eG.c1, this.eG.cM);
      break;
    }
    case 1: {
      var result = new $c_T2(this.eG.c2, this.eG.cN);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().G.h();
    }
  }
  this.dk = ((1 + this.dk) | 0);
  return result;
});
$p.cY = (function(n) {
  this.dk = ((this.dk + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  $thiz.dl = outer;
  $thiz.dm = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dm = 0;
  this.dl = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.l = (function() {
  return (this.dm < 3);
});
$p.h = (function() {
  switch (this.dm) {
    case 0: {
      var result = new $c_T2(this.dl.bQ, this.dl.cr);
      break;
    }
    case 1: {
      var result = new $c_T2(this.dl.bR, this.dl.cs);
      break;
    }
    case 2: {
      var result = new $c_T2(this.dl.bS, this.dl.ct);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().G.h();
    }
  }
  this.dm = ((1 + this.dm) | 0);
  return result;
});
$p.cY = (function(n) {
  this.dm = ((this.dm + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  $thiz.cu = outer;
  $thiz.dn = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dn = 0;
  this.cu = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.l = (function() {
  return (this.dn < 4);
});
$p.h = (function() {
  switch (this.dn) {
    case 0: {
      var result = new $c_T2(this.cu.bs, this.cu.c3);
      break;
    }
    case 1: {
      var result = new $c_T2(this.cu.bt, this.cu.c4);
      break;
    }
    case 2: {
      var result = new $c_T2(this.cu.bu, this.cu.c5);
      break;
    }
    case 3: {
      var result = new $c_T2(this.cu.bv, this.cu.c6);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().G.h();
    }
  }
  this.dn = ((1 + this.dn) | 0);
  return result;
});
$p.cY = (function(n) {
  this.dn = ((this.dn + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.cO = null;
  this.fD = false;
  this.e5 = null;
  this.cO = $m_sci_Map$EmptyMap$();
  this.fD = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.bf = (function(size) {
});
$p.oa = (function() {
  return (this.fD ? this.e5.jB() : this.cO);
});
$p.p1 = (function(key, value) {
  if (this.fD) {
    this.e5.eb(key, value);
  } else if ((this.cO.aL() < 4)) {
    this.cO = this.cO.dS(key, value);
  } else if (this.cO.ca(key)) {
    this.cO = this.cO.dS(key, value);
  } else {
    this.fD = true;
    if ((this.e5 === null)) {
      this.e5 = new $c_sci_HashMapBuilder();
    }
    this.cO.pp(this.e5);
    this.e5.eb(key, value);
  }
  return this;
});
$p.mP = (function(xs) {
  return (this.fD ? (this.e5.iR(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.bb = (function(elems) {
  return this.mP(elems);
});
$p.aU = (function(elem) {
  return this.p1(elem.bn(), elem.bj());
});
$p.ba = (function() {
  return this.oa();
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  gq: 1,
  a9: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().o5($m_jl_System$SystemProperties$().jf("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10);
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
  this.mq = 0;
  this.mr = null;
  $n_sci_Vector$ = this;
  this.mq = $ps_sci_Vector$__liftedTree1$1__I();
  this.mr = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.cX = (function(elems) {
  return this.bc(elems);
});
$p.bc = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.y();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.ay().aZ();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cp;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.by(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        it.j().by(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().fO(it).hf();
    }
  }
});
$p.aV = (function() {
  return new $c_sci_VectorBuilder();
});
$p.aK = (function(source) {
  return this.bc(source);
});
$p.bz = (function() {
  return $m_sci_Vector0$();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  gE: 1,
  ai: 1,
  W: 1,
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
  if (($thiz.M >= 6)) {
    a = $thiz.aQ;
    var i = (($thiz.I >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.w(i, dest, 0, length);
    }
    var newOffset = (($thiz.I % 33554432) | 0);
    $thiz.D = (($thiz.D - (($thiz.I - newOffset) | 0)) | 0);
    $thiz.I = newOffset;
    if (((($thiz.D >>> 25) | 0) === 0)) {
      $thiz.M = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.M >= 5)) {
    if ((a === null)) {
      a = $thiz.an;
    }
    var i$2 = (31 & (($thiz.I >>> 20) | 0));
    if (($thiz.M === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.w(i$2, dest$1, 0, length$1);
      }
      $thiz.an = a;
      var newOffset$1 = (($thiz.I % 1048576) | 0);
      $thiz.D = (($thiz.D - (($thiz.I - newOffset$1) | 0)) | 0);
      $thiz.I = newOffset$1;
      if (((($thiz.D >>> 20) | 0) === 0)) {
        $thiz.M = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().at(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.M >= 4)) {
    if ((a === null)) {
      a = $thiz.Z;
    }
    var i$3 = (31 & (($thiz.I >>> 15) | 0));
    if (($thiz.M === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.w(i$3, dest$2, 0, length$2);
      }
      $thiz.Z = a;
      var newOffset$2 = (($thiz.I % 32768) | 0);
      $thiz.D = (($thiz.D - (($thiz.I - newOffset$2) | 0)) | 0);
      $thiz.I = newOffset$2;
      if (((($thiz.D >>> 15) | 0) === 0)) {
        $thiz.M = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().at(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.M >= 3)) {
    if ((a === null)) {
      a = $thiz.K;
    }
    var i$4 = (31 & (($thiz.I >>> 10) | 0));
    if (($thiz.M === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.w(i$4, dest$3, 0, length$3);
      }
      $thiz.K = a;
      var newOffset$3 = (($thiz.I % 1024) | 0);
      $thiz.D = (($thiz.D - (($thiz.I - newOffset$3) | 0)) | 0);
      $thiz.I = newOffset$3;
      if (((($thiz.D >>> 10) | 0) === 0)) {
        $thiz.M = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().at(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.M >= 2)) {
    if ((a === null)) {
      a = $thiz.H;
    }
    var i$5 = (31 & (($thiz.I >>> 5) | 0));
    if (($thiz.M === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.w(i$5, dest$4, 0, length$4);
      }
      $thiz.H = a;
      var newOffset$4 = (($thiz.I % 32) | 0);
      $thiz.D = (($thiz.D - (($thiz.I - newOffset$4) | 0)) | 0);
      $thiz.I = newOffset$4;
      if (((($thiz.D >>> 5) | 0) === 0)) {
        $thiz.M = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().at(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.M >= 1)) {
    if ((a === null)) {
      a = $thiz.a8;
    }
    var i$6 = (31 & $thiz.I);
    if (($thiz.M === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.w(i$6, dest$5, 0, length$5);
      }
      $thiz.a8 = a;
      $thiz.J = (($thiz.J - $thiz.I) | 0);
      $thiz.I = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().at(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.fG = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.J === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.J) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.a8;
    var destPos = $thiz.J;
    data.w(0, dest, destPos, copy1);
    $thiz.J = (($thiz.J + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.a8;
      data.w(copy1, dest$1, 0, copy2);
      $thiz.J = (($thiz.J + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.J === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.D) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.D >>> 5) | 0));
      var dest = $thiz.H;
      slice.w(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.H;
        slice.w(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.D % 1024) | 0) !== 0)) {
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
            var hi = t.q;
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
      var a$1 = (31 & ((((32768 - $thiz.D) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.D >>> 10) | 0));
      var dest$2 = $thiz.K;
      slice.w(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.K;
        slice.w(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.D % 32768) | 0) !== 0)) {
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
            var hi$1 = t$1.q;
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
      var a$2 = (31 & ((((1048576 - $thiz.D) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.D >>> 15) | 0));
      var dest$4 = $thiz.Z;
      slice.w(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.Z;
        slice.w(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.D % 1048576) | 0) !== 0)) {
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
            var hi$2 = t$2.q;
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
      var a$3 = (31 & ((((33554432 - $thiz.D) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.D >>> 20) | 0));
      var dest$6 = $thiz.an;
      slice.w(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.an;
        slice.w(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.D % 33554432) | 0) !== 0)) {
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
            var hi$3 = t$3.q;
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
      var destPos$5 = (($thiz.D >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aQ;
      slice.w(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.co();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.cD(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.J === 32) || ($thiz.J === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().j7((((-2) + x1) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((data$2$2) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.D) | 0);
  var xor = (idx ^ $thiz.D);
  $thiz.D = idx;
  $thiz.J = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.D + n) | 0);
    var xor = (idx ^ $thiz.D);
    $thiz.D = idx;
    $thiz.J = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.a8) + ", a2=") + $thiz.H) + ", a3=") + $thiz.K) + ", a4=") + $thiz.Z) + ", a5=") + $thiz.an) + ", a6=") + $thiz.aQ) + ", depth=") + $thiz.M));
  } else if ((xor < 1024)) {
    if (($thiz.M <= 1)) {
      $thiz.H = new ($d_O.r().r().C)(32);
      $thiz.H.a[0] = $thiz.a8;
      $thiz.M = 2;
    }
    $thiz.a8 = new $ac_O(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.a8;
  } else if ((xor < 32768)) {
    if (($thiz.M <= 2)) {
      $thiz.K = new ($d_O.r().r().r().C)(32);
      $thiz.K.a[0] = $thiz.H;
      $thiz.M = 3;
    }
    $thiz.a8 = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.a8;
    $thiz.K.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
  } else if ((xor < 1048576)) {
    if (($thiz.M <= 3)) {
      $thiz.Z = new ($d_O.r().r().r().r().C)(32);
      $thiz.Z.a[0] = $thiz.K;
      $thiz.M = 4;
    }
    $thiz.a8 = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.K = new ($d_O.r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.a8;
    $thiz.K.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.Z.a[(31 & ((idx >>> 15) | 0))] = $thiz.K;
  } else if ((xor < 33554432)) {
    if (($thiz.M <= 4)) {
      $thiz.an = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.an.a[0] = $thiz.Z;
      $thiz.M = 5;
    }
    $thiz.a8 = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.K = new ($d_O.r().r().r().C)(32);
    $thiz.Z = new ($d_O.r().r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.a8;
    $thiz.K.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.Z.a[(31 & ((idx >>> 15) | 0))] = $thiz.K;
    $thiz.an.a[(31 & ((idx >>> 20) | 0))] = $thiz.Z;
  } else {
    if (($thiz.M <= 5)) {
      $thiz.aQ = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aQ.a[0] = $thiz.an;
      $thiz.M = 6;
    }
    $thiz.a8 = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.K = new ($d_O.r().r().r().C)(32);
    $thiz.Z = new ($d_O.r().r().r().r().C)(32);
    $thiz.an = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.a8;
    $thiz.K.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.Z.a[(31 & ((idx >>> 15) | 0))] = $thiz.K;
    $thiz.an.a[(31 & ((idx >>> 20) | 0))] = $thiz.Z;
    $thiz.aQ.a[((idx >>> 25) | 0)] = $thiz.an;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aQ = null;
  this.an = null;
  this.Z = null;
  this.K = null;
  this.H = null;
  this.a8 = null;
  this.J = 0;
  this.D = 0;
  this.I = 0;
  this.fG = false;
  this.M = 0;
  this.a8 = new $ac_O(32);
  this.J = 0;
  this.D = 0;
  this.I = 0;
  this.fG = false;
  this.M = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.bf = (function(size) {
});
$p.nK = (function(v) {
  var x1 = v.co();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.M = 1;
      var i = v.b.a.length;
      this.J = (31 & i);
      this.D = ((i - this.J) | 0);
      var a = v.b;
      this.a8 = ((a.a.length === 32) ? a : $m_ju_Arrays$().at(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.aP;
      var a$1 = v.c;
      this.a8 = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().at(a$1, 0, 32));
      this.M = 2;
      this.I = ((32 - v.b5) | 0);
      var i$1 = ((v.f + this.I) | 0);
      this.J = (31 & i$1);
      this.D = ((i$1 - this.J) | 0);
      this.H = new ($d_O.r().r().C)(32);
      this.H.a[0] = v.b;
      var dest = this.H;
      var length = d2.a.length;
      d2.w(0, dest, 1, length);
      this.H.a[((1 + d2.a.length) | 0)] = this.a8;
      break;
    }
    case 5: {
      var d3 = v.aw;
      var s2 = v.aB;
      var a$2 = v.c;
      this.a8 = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().at(a$2, 0, 32));
      this.M = 3;
      this.I = ((1024 - v.aI) | 0);
      var i$2 = ((v.f + this.I) | 0);
      this.J = (31 & i$2);
      this.D = ((i$2 - this.J) | 0);
      this.K = new ($d_O.r().r().r().C)(32);
      this.K.a[0] = $m_sci_VectorStatics$().B(v.b, v.aT);
      var dest$1 = this.K;
      var length$1 = d3.a.length;
      d3.w(0, dest$1, 1, length$1);
      this.H = $m_ju_Arrays$().a9(s2, 32);
      this.K.a[((1 + d3.a.length) | 0)] = this.H;
      this.H.a[s2.a.length] = this.a8;
      break;
    }
    case 7: {
      var d4 = v.ab;
      var s3 = v.ah;
      var s2$2 = v.ag;
      var a$3 = v.c;
      this.a8 = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().at(a$3, 0, 32));
      this.M = 4;
      this.I = ((32768 - v.ap) | 0);
      var i$3 = ((v.f + this.I) | 0);
      this.J = (31 & i$3);
      this.D = ((i$3 - this.J) | 0);
      this.Z = new ($d_O.r().r().r().r().C)(32);
      this.Z.a[0] = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(v.b, v.aD), v.aE);
      var dest$2 = this.Z;
      var length$2 = d4.a.length;
      d4.w(0, dest$2, 1, length$2);
      this.K = $m_ju_Arrays$().a9(s3, 32);
      this.H = $m_ju_Arrays$().a9(s2$2, 32);
      this.Z.a[((1 + d4.a.length) | 0)] = this.K;
      this.K.a[s3.a.length] = this.H;
      this.H.a[s2$2.a.length] = this.a8;
      break;
    }
    case 9: {
      var d5 = v.U;
      var s4 = v.X;
      var s3$2 = v.W;
      var s2$3 = v.V;
      var a$4 = v.c;
      this.a8 = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().at(a$4, 0, 32));
      this.M = 5;
      this.I = ((1048576 - v.a0) | 0);
      var i$4 = ((v.f + this.I) | 0);
      this.J = (31 & i$4);
      this.D = ((i$4 - this.J) | 0);
      this.an = new ($d_O.r().r().r().r().r().C)(32);
      this.an.a[0] = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(v.b, v.aj), v.ak), v.al);
      var dest$3 = this.an;
      var length$3 = d5.a.length;
      d5.w(0, dest$3, 1, length$3);
      this.Z = $m_ju_Arrays$().a9(s4, 32);
      this.K = $m_ju_Arrays$().a9(s3$2, 32);
      this.H = $m_ju_Arrays$().a9(s2$3, 32);
      this.an.a[((1 + d5.a.length) | 0)] = this.Z;
      this.Z.a[s4.a.length] = this.K;
      this.K.a[s3$2.a.length] = this.H;
      this.H.a[s2$3.a.length] = this.a8;
      break;
    }
    case 11: {
      var d6 = v.L;
      var s5 = v.S;
      var s4$2 = v.R;
      var s3$3 = v.Q;
      var s2$4 = v.P;
      var a$5 = v.c;
      this.a8 = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().at(a$5, 0, 32));
      this.M = 6;
      this.I = ((33554432 - v.Y) | 0);
      var i$5 = ((v.f + this.I) | 0);
      this.J = (31 & i$5);
      this.D = ((i$5 - this.J) | 0);
      this.aQ = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aQ.a[0] = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(v.b, v.a4), v.a5), v.a6), v.a7);
      var dest$4 = this.aQ;
      var length$4 = d6.a.length;
      d6.w(0, dest$4, 1, length$4);
      this.an = $m_ju_Arrays$().a9(s5, 32);
      this.Z = $m_ju_Arrays$().a9(s4$2, 32);
      this.K = $m_ju_Arrays$().a9(s3$3, 32);
      this.H = $m_ju_Arrays$().a9(s2$4, 32);
      this.aQ.a[((1 + d6.a.length) | 0)] = this.an;
      this.an.a[s5.a.length] = this.Z;
      this.Z.a[s4$2.a.length] = this.K;
      this.K.a[s3$3.a.length] = this.H;
      this.H.a[s2$4.a.length] = this.a8;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.J === 0) && (this.D > 0))) {
    this.J = 32;
    this.D = (((-32) + this.D) | 0);
  }
  return this;
});
$p.pa = (function(before, bigVector) {
  if (((this.J !== 0) || (this.D !== 0))) {
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
    var x1$2___1$mcI$sp = bigVector.b5;
    var x1$2___2$mcI$sp = 32;
  } else if ((bigVector instanceof $c_sci_Vector3)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.aI;
    var x1$2___2$mcI$sp = 1024;
  } else if ((bigVector instanceof $c_sci_Vector4)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.ap;
    var x1$2___2$mcI$sp = 32768;
  } else if ((bigVector instanceof $c_sci_Vector5)) {
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.a0;
    var x1$2___2$mcI$sp = 1048576;
  } else {
    if ((!(bigVector instanceof $c_sci_Vector6))) {
      throw new $c_s_MatchError(bigVector);
    }
    var x1$2___1 = null;
    var x1$2___2 = null;
    var x1$2___1$mcI$sp = bigVector.Y;
    var x1$2___2$mcI$sp = 33554432;
  }
  var prefixLength = x1$2___1$mcI$sp;
  var maxPrefixLength = x1$2___2$mcI$sp;
  if ((maxPrefixLength === 1)) {
    return this;
  }
  var overallPrefixLength = $intMod(((before + prefixLength) | 0), maxPrefixLength);
  this.I = $intMod(((maxPrefixLength - overallPrefixLength) | 0), maxPrefixLength);
  $p_sci_VectorBuilder__advanceN__I__V(this, ((-32) & this.I));
  this.J = (31 & this.I);
  this.fG = true;
  return this;
});
$p.p4 = (function(elem) {
  if ((this.J === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.a8.a[this.J] = elem;
  this.J = ((1 + this.J) | 0);
  return this;
});
$p.fO = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.J === 0) && (this.D === 0)) && (!this.fG)) ? this.nK(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.hf = (function() {
  if (this.fG) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.J + this.D) | 0);
  var realLen = ((len - this.I) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.a8;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().a9(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().at(this.H, 1, i2);
    var prefix1 = this.H.a[0];
    var a$1 = this.H.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().a9(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.I) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().at(this.K, 1, i3);
    var a$2 = this.K.a[0];
    var prefix2 = $m_ju_Arrays$().at(a$2, 1, a$2.a.length);
    var prefix1$2 = this.K.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().a9(this.K.a[i3], i2$2);
    var a$3 = this.K.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().a9(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().at(this.Z, 1, i4);
    var a$4 = this.Z.a[0];
    var prefix3 = $m_ju_Arrays$().at(a$4, 1, a$4.a.length);
    var a$5 = this.Z.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().at(a$5, 1, a$5.a.length);
    var prefix1$3 = this.Z.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().a9(this.Z.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().a9(this.Z.a[i4].a[i3$2], i2$3);
    var a$6 = this.Z.a[i4].a[i3$2].a[i2$3];
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
    var data$4 = $m_ju_Arrays$().at(this.an, 1, i5);
    var a$7 = this.an.a[0];
    var prefix4 = $m_ju_Arrays$().at(a$7, 1, a$7.a.length);
    var a$8 = this.an.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().at(a$8, 1, a$8.a.length);
    var a$9 = this.an.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().at(a$9, 1, a$9.a.length);
    var prefix1$4 = this.an.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().a9(this.an.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().a9(this.an.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().a9(this.an.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.an.a[i5].a[i4$2].a[i3$3].a[i2$4];
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
    var data$5 = $m_ju_Arrays$().at(this.aQ, 1, i6);
    var a$11 = this.aQ.a[0];
    var prefix5 = $m_ju_Arrays$().at(a$11, 1, a$11.a.length);
    var a$12 = this.aQ.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().at(a$12, 1, a$12.a.length);
    var a$13 = this.aQ.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().at(a$13, 1, a$13.a.length);
    var a$14 = this.aQ.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().at(a$14, 1, a$14.a.length);
    var prefix1$5 = this.aQ.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().a9(this.aQ.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().a9(this.aQ.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().a9(this.aQ.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().a9(this.aQ.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.aQ.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().a9(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.v = (function() {
  return (((((((("VectorBuilder(len1=" + this.J) + ", lenRest=") + this.D) + ", offset=") + this.I) + ", depth=") + this.M) + ")");
});
$p.ba = (function() {
  return this.hf();
});
$p.bb = (function(elems) {
  return this.fO(elems);
});
$p.aU = (function(elem) {
  return this.p4(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  gG: 1,
  a9: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.ms = null;
  $n_scm_ArrayBuffer$ = this;
  this.ms = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.cX = (function(elems) {
  return this.nC(elems);
});
$p.nC = (function(coll) {
  var k = coll.y();
  if ((k >= 0)) {
    var array = this.od(this.ms, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.by(array, 0, 2147483647) : coll.j().by(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).mQ(coll);
  }
});
$p.aV = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.r8 = (function(arrayLen, targetLen) {
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
$p.od = (function(array, curSize, targetSize) {
  var newLen = this.r8(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.w(0, res, 0, curSize);
    return res;
  }
});
$p.bz = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
});
$p.aK = (function(source) {
  return this.nC(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  gL: 1,
  ai: 1,
  W: 1,
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
  this.dB = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.bf = (function(size) {
  this.dB.bf(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  gM: 1,
  aU: 1,
  M: 1,
  J: 1,
  H: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.d9 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  gR: 1,
  aM: 1,
  W: 1,
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
  this.dB = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.bf = (function(size) {
  this.dB.bf(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  gZ: 1,
  aU: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  $thiz.fJ = outer;
  $thiz.dD = 0;
  $thiz.cS = null;
  $thiz.fK = outer.b7.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.dD = 0;
  this.cS = null;
  this.fK = 0;
  this.fJ = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.l = (function() {
  if ((this.cS !== null)) {
    return true;
  } else {
    while ((this.dD < this.fK)) {
      var n = this.fJ.b7.a[this.dD];
      this.dD = ((1 + this.dD) | 0);
      if ((n !== null)) {
        this.cS = n;
        return true;
      }
    }
    return false;
  }
});
$p.h = (function() {
  if ((!this.l())) {
    return $m_sc_Iterator$().G.h();
  } else {
    var r = this.j6(this.cS);
    this.cS = this.cS.b8;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.fL = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.fL = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.bf = (function(size) {
});
$p.bb = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.ba = (function() {
  return this.fL;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.d9 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  h2: 1,
  aM: 1,
  W: 1,
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
$p.cX = (function(elems) {
  return new $c_scm_ListBuffer().hh(elems);
});
$p.aV = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.bz = (function() {
  return new $c_scm_ListBuffer();
});
$p.aK = (function(source) {
  return new $c_scm_ListBuffer().hh(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  h5: 1,
  ai: 1,
  W: 1,
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
  this.iL = null;
  this.mB = null;
  this.mA = 0;
  this.iL = underlying;
  this.mB = mutationCount;
  this.mA = (mutationCount.T() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.l = (function() {
  $m_scm_MutationTracker$().ne(this.mA, (this.mB.T() | 0), "mutation occurred during iteration");
  return this.iL.l();
});
$p.h = (function() {
  return this.iL.h();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  h7: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.aZ();
    var x$3 = x.aZ();
    return (x$2 === x$3);
  } else {
    return false;
  }
}
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.a2.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.a2.Q())) + "]") : clazz.a2.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.G)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.G)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.fN = 0;
  this.mF = 0;
  this.mG = null;
  this.mG = x$2;
  this.fN = 0;
  this.mF = x$2.aW();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.l = (function() {
  return (this.fN < this.mF);
});
$p.h = (function() {
  var result = this.mG.aX(this.fN);
  this.fN = ((1 + this.fN) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  hP: 1,
  n: 1,
  o: 1,
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
$p.cX = (function(elems) {
  return this.nD(elems);
});
$p.aV = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.nD = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).ba();
});
$p.aK = (function(source) {
  return this.nD(source);
});
$p.bz = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  hW: 1,
  ai: 1,
  W: 1,
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
$p.cX = (function(elems) {
  return this.jb(elems);
});
$p.jb = (function(source) {
  return this.aV().bb(source).ba();
});
$p.aV = (function() {
  return new $c_scm_Builder$$anon$1($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), x$1$2$2.dE))));
});
$p.aK = (function(source) {
  return this.jb(source);
});
$p.bz = (function() {
  return $ct_sjsr_WrappedVarArgs__(new $c_sjsr_WrappedVarArgs());
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  ia: 1,
  ai: 1,
  W: 1,
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
  this.dF = null;
  this.dF = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.nL = (function() {
  return true;
});
$p.nM = (function() {
  return false;
});
$p.jq = (function(f) {
  return this;
});
$p.o6 = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.bx(this.dF, new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().dK(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
  }
});
$p.ck = (function(fa, fb) {
  return fa.e(this.dF);
});
$p.aY = (function() {
  return "Failure";
});
$p.aW = (function() {
  return 1;
});
$p.aX = (function(x$1) {
  return ((x$1 === 0) ? this.dF : $m_sr_Statics$().dP(x$1));
});
$p.be = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().cB(this, (-889275714), false);
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().eM(this);
});
$p.k = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Failure)) {
    var x = this.dF;
    var x$2 = x$1.dF;
    return ((x === null) ? (x$2 === null) : x.k(x$2));
  } else {
    return false;
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  cu: 1,
  cw: 1,
  B: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.dG = null;
  this.dG = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.nL = (function() {
  return false;
});
$p.nM = (function() {
  return true;
});
$p.jq = (function(f) {
  try {
    return new $c_s_util_Success(f.e(this.dG));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().dK(e$2)) {
      return new $c_s_util_Failure(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
  }
});
$p.o6 = (function(pf) {
  return this;
});
$p.ck = (function(fa, fb) {
  try {
    return fb.e(this.dG);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ($m_s_util_control_NonFatal$().dK(e$2)) {
      return fa.e(e$2);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
  }
});
$p.aY = (function() {
  return "Success";
});
$p.aW = (function() {
  return 1;
});
$p.aX = (function(x$1) {
  return ((x$1 === 0) ? this.dG : $m_sr_Statics$().dP(x$1));
});
$p.be = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().cB(this, (-889275714), false);
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().eM(this);
});
$p.k = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().p(this.dG, x$1.dG)));
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cv)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  cv: 1,
  cw: 1,
  B: 1,
  d: 1,
  a: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fa = null;
    this.f9 = null;
    this.fa = error;
    this.f9 = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eg(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eg(cause)), null, true, true);
    this.jk(cause);
  }
  be() {
    return new $c_s_Product$$anon$1(this);
  }
  r() {
    return $m_s_util_hashing_MurmurHash3$().cB(this, (-889275714), false);
  }
  k(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.fa;
      var x$2 = x$0.fa;
      if (((x === null) ? (x$2 === null) : x.k(x$2))) {
        var x$3 = this.f9;
        var x$4 = x$0.f9;
        return ((x$3 === null) ? (x$4 === null) : x$3.k(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aW() {
    return 2;
  }
  aY() {
    return "ErrorHandlingError";
  }
  aX(n) {
    if ((n === 0)) {
      return this.fa;
    }
    if ((n === 1)) {
      return this.f9;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("ErrorHandlingError: " + this.fa) + "; cause: ") + this.f9);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b0)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  b0: 1,
  al: 1,
  u: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.fb = null;
    this.fb = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eg(error)), null, true, true);
  }
  be() {
    return new $c_s_Product$$anon$1(this);
  }
  r() {
    return $m_s_util_hashing_MurmurHash3$().cB(this, (-889275714), false);
  }
  k(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.fb;
      var x$2 = x$0.fb;
      return ((x === null) ? (x$2 === null) : x.k(x$2));
    } else {
      return false;
    }
  }
  aW() {
    return 1;
  }
  aY() {
    return "ObserverError";
  }
  aX(n) {
    if ((n === 0)) {
      return this.fb;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ("ObserverError: " + this.fb);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b1)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  b1: 1,
  al: 1,
  u: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.fd = null;
    this.fc = null;
    this.fd = error;
    this.fc = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().eg(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().eg(cause)), null, true, true);
    this.jk(cause);
  }
  be() {
    return new $c_s_Product$$anon$1(this);
  }
  r() {
    return $m_s_util_hashing_MurmurHash3$().cB(this, (-889275714), false);
  }
  k(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.fd;
      var x$2 = x$0.fd;
      if (((x === null) ? (x$2 === null) : x.k(x$2))) {
        var x$3 = this.fc;
        var x$4 = x$0.fc;
        return ((x$3 === null) ? (x$4 === null) : x$3.k(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aW() {
    return 2;
  }
  aY() {
    return "ObserverErrorHandlingError";
  }
  aX(n) {
    if ((n === 0)) {
      return this.fd;
    }
    if ((n === 1)) {
      return this.fc;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("ObserverErrorHandlingError: " + this.fd) + "; cause: ") + this.fc);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b2)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  b2: 1,
  al: 1,
  u: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.eq = null;
    this.ep = 0;
    this.eq = trx;
    this.ep = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  be() {
    return new $c_s_Product$$anon$1(this);
  }
  r() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().g(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().g(acc, $m_sr_Statics$().N(this.eq));
    acc = $m_sr_Statics$().g(acc, this.ep);
    return $m_sr_Statics$().C(acc, 2);
  }
  k(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.ep === x$0.ep)) {
        var x = this.eq;
        var x$2 = x$0.eq;
        return (x === x$2);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aW() {
    return 2;
  }
  aY() {
    return "TransactionDepthExceeded";
  }
  aX(n) {
    if ((n === 0)) {
      return this.eq;
    }
    if ((n === 1)) {
      return this.ep;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("TransactionDepthExceeded: " + this.eq) + "; maxDepth: ") + this.ep);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b3)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  b3: 1,
  al: 1,
  u: 1,
  a: 1,
  d: 1,
  B: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$VarError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(message, cause) {
    super();
    this.ff = null;
    this.fe = null;
    this.ff = message;
    this.fe = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, $m_Lcom_raquo_airstream_core_AirstreamError$().pt(message, cause), null, true, true);
    if ((!cause.d())) {
      this.jk(cause.O());
    }
  }
  be() {
    return new $c_s_Product$$anon$1(this);
  }
  r() {
    return $m_s_util_hashing_MurmurHash3$().cB(this, (-889275714), false);
  }
  k(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$VarError)) {
      if ((this.ff === x$0.ff)) {
        var x = this.fe;
        var x$2 = x$0.fe;
        return ((x === null) ? (x$2 === null) : x.k(x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  aW() {
    return 2;
  }
  aY() {
    return "VarError";
  }
  aX(n) {
    if ((n === 0)) {
      return this.ff;
    }
    if ((n === 1)) {
      return this.fe;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  v() {
    return ((("VarError: " + this.ff) + "; cause: ") + this.fe);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$VarError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b4)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$VarError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$VarError, "com.raquo.airstream.core.AirstreamError$VarError", ({
  b4: 1,
  al: 1,
  u: 1,
  a: 1,
  d: 1,
  B: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.jF();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.k8 = 1;
  $thiz.gl = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.gl = ((1 + $thiz.gl) | 0);
  $thiz.gk.k2.T();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.gk.k0.T(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().dK(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
    }
  }
  $x_1.o6(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.gk.k1.T();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.kx = null;
  this.op = null;
  this.hB = null;
  this.hA = null;
  this.fg = null;
  this.kx = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.hB = initial;
  this.hA = new $c_Lcom_raquo_airstream_state_VarSignal(this.hB, new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.fg = this.hA;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.ej = (function() {
  return this.kx;
});
$p.ee = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.jC = (function(value, transaction) {
  this.hB = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.hA, value, transaction);
});
$p.f0 = (function() {
  return this.fg;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  d5: 1,
  am: 1,
  aD: 1,
  as: 1,
  a5: 1,
  d7: 1
}));
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V($thiz, propDomName) {
  var x = $thiz.hV;
  if ((x === (void 0))) {
    $thiz.hV = $m_sjs_js_defined$().pg($m_Lcom_raquo_ew_JsArray$().bo($m_sr_ScalaRunTime$().A(new ($d_T.r().C)([propDomName]))));
  } else {
    (x.push(propDomName) | 0);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z($thiz, propDomName) {
  var x = $thiz.lM;
  if ((x !== (void 0))) {
    _return: {
      var len = (x.length | 0);
      var i = 0;
      while ((i < len)) {
        if ((x[i].s9() === propDomName)) {
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
  this.gy = null;
  this.cf = null;
  this.hU = null;
  this.e0 = null;
  this.fp = null;
  this.hW = null;
  this.bh = null;
  this.lM = null;
  this.hV = null;
  this.hW = tag;
  this.bh = ref;
  this.gy = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
  this.lM = (void 0);
  this.hV = (void 0);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.cv = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().eO(parentNode, this, (void 0));
});
$p.h2 = (function() {
  return this.cf;
});
$p.nh = (function(x$0) {
  this.cf = x$0;
});
$p.ge = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.gb = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.pw = (function() {
  if ($m_Lcom_raquo_laminar_DomApi$().qo(this.bh)) {
    var x1 = this.hW;
    if (false) {
      return x1.rR();
    }
    return (void 0);
  } else {
    return $m_Lcom_raquo_laminar_inputs_InputController$().lt;
  }
});
$p.qm = (function(propDomName) {
  var x = this.pw();
  return ((x !== (void 0)) && $m_Lcom_raquo_ew_JsArray$RichJsArray$().qf(x, propDomName, 0));
});
$p.qN = (function(key) {
  if ((key instanceof $c_Lcom_raquo_laminar_keys_HtmlProp)) {
    if (this.qm(key.cG)) {
      if ($p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__hasController__T__Z(this, key.cG)) {
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((((("Can not add uncontrolled `" + key.cG) + " <-- ???` to element `") + $m_Lcom_raquo_laminar_DomApi$().nk(this.bh)) + "` that already has an input controller for `") + key.cG) + "` property."));
      } else {
        $p_Lcom_raquo_laminar_nodes_ReactiveHtmlElement__appendControllablePropBinder__T__V(this, key.cG);
      }
    }
  }
});
$p.v = (function() {
  return (("ReactiveHtmlElement(" + ((this.bh !== null) ? this.bh.outerHTML : ("tag=" + this.hW.hZ))) + ")");
});
$p.aA = (function() {
  return this.bh;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  em: 1,
  au: 1,
  V: 1,
  aE: 1,
  bm: 1,
  ek: 1
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
  ev: 1,
  aG: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().jw($thiz);
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bq)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bq: 1,
  ab: 1,
  a: 1,
  a2: 1,
  Z: 1,
  an: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  return $m_jl_FloatingPointBits$().jw(value);
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  eA: 1,
  ab: 1,
  a: 1,
  a2: 1,
  Z: 1,
  an: 1
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
  eD: 1,
  ab: 1,
  a: 1,
  a2: 1,
  Z: 1,
  an: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  return ((that instanceof $c_RTLong) && (($thiz.o === that.o) && ($thiz.q === that.q)));
}
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.o ^ $thiz.q);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().o3($thiz.o, $thiz.q);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bs)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bs: 1,
  ab: 1,
  a: 1,
  a2: 1,
  Z: 1,
  an: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  eJ: 1,
  br: 1,
  E: 1,
  D: 1,
  u: 1,
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
  var str = $m_jl_Character$().rr(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  eO: 1,
  a: 1,
  a2: 1,
  aF: 1,
  Z: 1,
  an: 1
}), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().i($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  eR: 1,
  aG: 1,
  E: 1,
  D: 1,
  u: 1,
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
$p.q4 = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.aY = (function() {
  return "None";
});
$p.aW = (function() {
  return 0;
});
$p.aX = (function(x$1) {
  return $m_sr_Statics$().dP(x$1);
});
$p.be = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return 2433880;
});
$p.v = (function() {
  return "None";
});
$p.O = (function() {
  this.q4();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  fd: 1,
  bw: 1,
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
  this.ft = null;
  this.ft = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.O = (function() {
  return this.ft;
});
$p.aY = (function() {
  return "Some";
});
$p.aW = (function() {
  return 1;
});
$p.aX = (function(x$1) {
  return ((x$1 === 0) ? this.ft : $m_sr_Statics$().dP(x$1));
});
$p.be = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().cB(this, (-889275714), false);
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().eM(this);
});
$p.k = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().p(this.ft, x$1.ft)));
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bx)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bx: 1,
  bw: 1,
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
$p.bq = (function() {
  return $m_sc_Iterable$();
});
$p.bU = (function() {
  return this.bl();
});
$p.bl = (function() {
  return "Iterable";
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.g1 = (function(coll) {
  return this.bq().aK(coll);
});
$p.g7 = (function() {
  return this.bq().aV();
});
$p.u = (function() {
  return this.j().h();
});
$p.jD = (function(otherSize) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, otherSize);
});
$p.az = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.eR = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.d = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.by = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.gZ = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.dI = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.jE = (function() {
  return $m_sci_Vector$().bc(this);
});
$p.y = (function() {
  return (-1);
});
$p.eS = (function(coll) {
  return this.g1(coll);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.bL = xs;
  $thiz.z = 0;
  $thiz.bC = $m_jl_reflect_Array$().cb($thiz.bL);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.bL = null;
  this.z = 0;
  this.bC = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.y = (function() {
  return ((this.bC - this.z) | 0);
});
$p.l = (function() {
  return (this.z < this.bC);
});
$p.h = (function() {
  if ((this.z >= $m_jl_reflect_Array$().cb(this.bL))) {
    $m_sc_Iterator$().G.h();
  }
  var r = $m_sr_ScalaRunTime$().ed(this.bL, this.z);
  this.z = ((1 + this.z) | 0);
  return r;
});
$p.cY = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.z + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.bC;
    } else {
      var a = this.bC;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.z = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  a0: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bM) ? $thiz.bM : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.ik = self;
  $thiz.cI = 0;
  $thiz.bM = self.m();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.ik = null;
  this.cI = 0;
  this.bM = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.y = (function() {
  return this.bM;
});
$p.l = (function() {
  return (this.bM > 0);
});
$p.h = (function() {
  if ((this.bM > 0)) {
    var r = this.ik.t(this.cI);
    this.cI = ((1 + this.cI) | 0);
    this.bM = (((-1) + this.bM) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().G.h();
  }
});
$p.cY = (function(n) {
  if ((n > 0)) {
    this.cI = ((this.cI + n) | 0);
    var b = ((this.bM - n) | 0);
    this.bM = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.eY = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bM = ((b < 0) ? 0 : b);
  this.cI = ((this.cI + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bC: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(self) {
  this.m4 = null;
  this.bi = 0;
  this.eB = 0;
  this.m4 = self;
  this.bi = self.m();
  this.eB = (((-1) + this.bi) | 0);
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.l = (function() {
  return (this.bi > 0);
});
$p.h = (function() {
  if ((this.bi > 0)) {
    var r = this.m4.t(this.eB);
    this.eB = (((-1) + this.eB) | 0);
    this.bi = (((-1) + this.bi) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().G.h();
  }
});
$p.eY = (function(from, until) {
  if ((this.bi > 0)) {
    if ((this.bi <= from)) {
      this.bi = 0;
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.bi))) {
        this.bi = until;
      }
    } else {
      this.eB = ((this.eB - from) | 0);
      if (((until >= 0) && (until < this.bi))) {
        if ((until <= from)) {
          this.bi = 0;
        } else {
          this.bi = ((until - from) | 0);
        }
      } else {
        this.bi = ((this.bi - from) | 0);
      }
    }
  }
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewReverseIterator, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", ({
  fA: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.fL = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().G);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.p2 = (function(elem) {
  this.fL = this.fL.iZ(new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.aU = (function(elem) {
  return this.p2(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  fI: 1,
  h1: 1,
  a9: 1,
  M: 1,
  J: 1,
  H: 1
}));
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.d0(x, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => default$1.e(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.j();
  while (it.l()) {
    var next = it.h();
    f.ec(next.bn(), next.bj());
  }
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9($thiz.j(), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x0$1$2$2) => {
    if ((x0$1$2$2 !== null)) {
      var k = x0$1$2$2.bn();
      var v = x0$1$2$2.bj();
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1$2$2);
    }
  }))), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.g7();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.j();
  while (it.l()) {
    var next = it.h();
    if (seen.gW(f.e(next))) {
      builder.aU(next);
    }
  }
  return builder.ba();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.dQ().aV();
  b.bb($thiz);
  b.bb(suffix);
  return b.ba();
}
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.ip)) {
    $thiz.iq = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.ip = true;
  }
  return $thiz.iq;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.ip) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.iq);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.iq = null;
  this.ir = null;
  this.ip = false;
  $n_sci_ArraySeq$ = this;
  this.ir = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.j9 = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.jH($m_s_Array$().nz(it, tag)));
});
$p.h8 = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((b$2$2) => $m_sci_ArraySeq$().jH($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.jH = (function(x) {
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
$p.j8 = (function(it, evidence$5) {
  return this.j9(it, evidence$5);
});
$p.nn = (function(evidence$6) {
  return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  g1: 1,
  bG: 1,
  bA: 1,
  bz: 1,
  bB: 1,
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
  this.bO = 0;
  this.fz = 0;
  this.e4 = null;
  this.bF = 0;
  this.cL = null;
  this.fA = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.bm);
  while (this.l()) {
    var originalHash = this.e4.g2(this.bO);
    outer.f1(outer.cq, this.e4.dO(this.bO), this.e4.d1(this.bO), originalHash, $m_sc_Hashing$().cl(originalHash), 0);
    this.bO = ((1 + this.bO) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.jt = (function() {
  $m_sc_Iterator$().G.h();
  throw new $c_jl_ClassCastException();
});
$p.h = (function() {
  this.jt();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  g5: 1,
  bT: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.t)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.t)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.dk = 0;
  this.eG = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  gk: 1,
  gl: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dm = 0;
  this.dl = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  gm: 1,
  gn: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dn = 0;
  this.cu = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  go: 1,
  gp: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.dh = 0;
  this.gI = null;
  this.bP = 0;
  this.fB = null;
  this.fC = null;
  this.iy = 0;
  this.mn = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.iy = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().ok(this.iy, $m_sr_Statics$().N(this.mn), (-889275714));
});
$p.qC = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().G.h();
  }
  this.iy = this.gI.g2(this.dh);
  this.mn = this.gI.d1(this.dh);
  this.dh = (((-1) + this.dh) | 0);
  return this;
});
$p.h = (function() {
  return this.qC();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  gr: 1,
  g2: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.bO = 0;
  this.fz = 0;
  this.e4 = null;
  this.bF = 0;
  this.cL = null;
  this.fA = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.qB = (function() {
  if ((!this.l())) {
    $m_sc_Iterator$().G.h();
  }
  var payload = this.e4.je(this.bO);
  this.bO = ((1 + this.bO) | 0);
  return payload;
});
$p.h = (function() {
  return this.qB();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  gs: 1,
  bT: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bG <= $thiz.aN)) {
    $m_sc_Iterator$().G.h();
  }
  $thiz.dq = ((1 + $thiz.dq) | 0);
  var slice = $thiz.iA.cD($thiz.dq);
  while ((slice.a.length === 0)) {
    $thiz.dq = ((1 + $thiz.dq) | 0);
    slice = $thiz.iA.cD($thiz.dq);
  }
  $thiz.fE = $thiz.e7;
  var count = $thiz.mp;
  var idx = $thiz.dq;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.dp = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.dp;
  switch (x1) {
    case 1: {
      $thiz.b3 = slice;
      break;
    }
    case 2: {
      $thiz.b4 = slice;
      break;
    }
    case 3: {
      $thiz.bw = slice;
      break;
    }
    case 4: {
      $thiz.ch = slice;
      break;
    }
    case 5: {
      $thiz.e6 = slice;
      break;
    }
    case 6: {
      $thiz.iz = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.e7 = (($thiz.fE + Math.imul(slice.a.length, (1 << Math.imul(5, (((-1) + $thiz.dp) | 0))))) | 0);
  if (($thiz.e7 > $thiz.cQ)) {
    $thiz.e7 = $thiz.cQ;
  }
  if (($thiz.dp > 1)) {
    $thiz.eH = (((-1) + (1 << Math.imul(5, $thiz.dp))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.aN - $thiz.bG) | 0) + $thiz.cQ) | 0);
  if ((pos === $thiz.e7)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.dp > 1)) {
    var io = ((pos - $thiz.fE) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.eH ^ io));
    $thiz.eH = io;
  }
  $thiz.bG = (($thiz.bG - $thiz.aN) | 0);
  var a = $thiz.b3.a.length;
  var b = $thiz.bG;
  $thiz.cP = ((a < b) ? a : b);
  $thiz.aN = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.b3 = $thiz.b4.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.b4 = $thiz.bw.a[(31 & ((io >>> 10) | 0))];
    $thiz.b3 = $thiz.b4.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bw = $thiz.ch.a[(31 & ((io >>> 15) | 0))];
    $thiz.b4 = $thiz.bw.a[0];
    $thiz.b3 = $thiz.b4.a[0];
  } else if ((xor < 33554432)) {
    $thiz.ch = $thiz.e6.a[(31 & ((io >>> 20) | 0))];
    $thiz.bw = $thiz.ch.a[0];
    $thiz.b4 = $thiz.bw.a[0];
    $thiz.b3 = $thiz.b4.a[0];
  } else {
    $thiz.e6 = $thiz.iz.a[((io >>> 25) | 0)];
    $thiz.ch = $thiz.e6.a[0];
    $thiz.bw = $thiz.ch.a[0];
    $thiz.b4 = $thiz.bw.a[0];
    $thiz.b3 = $thiz.b4.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.b3 = $thiz.b4.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.b4 = $thiz.bw.a[(31 & ((io >>> 10) | 0))];
    $thiz.b3 = $thiz.b4.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bw = $thiz.ch.a[(31 & ((io >>> 15) | 0))];
    $thiz.b4 = $thiz.bw.a[(31 & ((io >>> 10) | 0))];
    $thiz.b3 = $thiz.b4.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.ch = $thiz.e6.a[(31 & ((io >>> 20) | 0))];
    $thiz.bw = $thiz.ch.a[(31 & ((io >>> 15) | 0))];
    $thiz.b4 = $thiz.bw.a[(31 & ((io >>> 10) | 0))];
    $thiz.b3 = $thiz.b4.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.e6 = $thiz.iz.a[((io >>> 25) | 0)];
    $thiz.ch = $thiz.e6.a[(31 & ((io >>> 20) | 0))];
    $thiz.bw = $thiz.ch.a[(31 & ((io >>> 15) | 0))];
    $thiz.b4 = $thiz.bw.a[(31 & ((io >>> 10) | 0))];
    $thiz.b3 = $thiz.b4.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.iA = null;
  this.cQ = 0;
  this.mp = 0;
  this.b3 = null;
  this.b4 = null;
  this.bw = null;
  this.ch = null;
  this.e6 = null;
  this.iz = null;
  this.cP = 0;
  this.aN = 0;
  this.eH = 0;
  this.bG = 0;
  this.dq = 0;
  this.dp = 0;
  this.fE = 0;
  this.e7 = 0;
  this.iA = v;
  this.cQ = totalLength;
  this.mp = sliceCount;
  this.b3 = v.b;
  this.cP = this.b3.a.length;
  this.aN = 0;
  this.eH = 0;
  this.bG = this.cQ;
  this.dq = 0;
  this.dp = 1;
  this.fE = 0;
  this.e7 = this.cP;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.y = (function() {
  return ((this.bG - this.aN) | 0);
});
$p.l = (function() {
  return (this.bG > this.aN);
});
$p.h = (function() {
  if ((this.aN === this.cP)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.b3.a[this.aN];
  this.aN = ((1 + this.aN) | 0);
  return r;
});
$p.cY = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.aN - this.bG) | 0) + this.cQ) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.cQ;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.cQ)) {
      this.aN = 0;
      this.bG = 0;
      this.cP = 0;
    } else {
      while ((newpos >= this.e7)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.fE) | 0);
      if ((this.dp > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.eH ^ io));
        this.eH = io;
      }
      this.cP = this.b3.a.length;
      this.aN = (31 & io);
      this.bG = ((this.aN + ((this.cQ - newpos) | 0)) | 0);
      if ((this.cP > this.bG)) {
        this.cP = this.bG;
      }
    }
  }
  return this;
});
$p.by = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().cb(xs);
  var srcLen = ((this.bG - this.aN) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.aN === this.cP)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.b3.a.length - this.aN) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.b3;
      var srcPos = this.aN;
      var destPos = ((start + copied) | 0);
      src.w(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().fY(this.b3, this.aN, xs, ((start + copied) | 0), count);
    }
    this.aN = ((this.aN + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  gu: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  A: 1
}));
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.eI = 0;
  this.e9 = 0;
  this.dr = false;
  this.e8 = 0;
  this.eI = step;
  this.e9 = lastElement;
  this.dr = (!initiallyEmpty);
  this.e8 = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.y = (function() {
  return (this.dr ? ((1 + $intDiv(((this.e9 - this.e8) | 0), this.eI)) | 0) : 0);
});
$p.l = (function() {
  return this.dr;
});
$p.nS = (function() {
  if ((!this.dr)) {
    $m_sc_Iterator$().G.h();
  }
  var value = this.e8;
  this.dr = (value !== this.e9);
  this.e8 = ((value + this.eI) | 0);
  return value;
});
$p.cY = (function(n) {
  if ((n > 0)) {
    var value = this.e8;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.eI, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
    if ((this.eI > 0)) {
      var value$2 = this.e9;
      var hi$3 = (value$2 >> 31);
      if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
        var this$6__lo = value$2;
        var this$6__hi = hi$3;
      } else {
        var this$6__lo = lo;
        var this$6__hi = hi$2;
      }
      this.e8 = this$6__lo;
      var value$3 = this.e9;
      var hi$4 = (value$3 >> 31);
      this.dr = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4));
    } else if ((this.eI < 0)) {
      var value$4 = this.e9;
      var hi$5 = (value$4 >> 31);
      if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
        var this$10__lo = value$4;
        var this$10__hi = hi$5;
      } else {
        var this$10__lo = lo;
        var this$10__hi = hi$2;
      }
      this.e8 = this$10__lo;
      var value$5 = this.e9;
      var hi$6 = (value$5 >> 31);
      this.dr = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.h = (function() {
  return this.nS();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  gx: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.iE = 0;
  $thiz.mu = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.iE = 0;
  this.mu = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.bf = (function(size) {
  if ((this.iE < size)) {
    this.r7(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.iH = null;
  this.iG = null;
  $n_scm_ArraySeq$ = this;
  this.iH = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.iG = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.pX = (function(it, evidence$2) {
  return this.jp($m_s_Array$().nz(it, evidence$2));
});
$p.h8 = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.aZ()), new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => $m_scm_ArraySeq$().jp(x$2$2))));
});
$p.jp = (function(x) {
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
$p.j8 = (function(it, evidence$5) {
  return this.pX(it, evidence$5);
});
$p.nn = (function(evidence$6) {
  return this.iG;
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  gQ: 1,
  bG: 1,
  bA: 1,
  bz: 1,
  bB: 1,
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
  this.dD = 0;
  this.cS = null;
  this.fK = 0;
  this.fJ = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.j6 = (function(nd) {
  return nd.eK;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  gW: 1,
  aV: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.dD = 0;
  this.cS = null;
  this.fK = 0;
  this.fJ = null;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.j6 = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  gX: 1,
  aV: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.dD = 0;
  this.cS = null;
  this.fK = 0;
  this.fJ = null;
  this.iK = 0;
  this.mz = null;
  this.mz = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.iK = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.r = (function() {
  return this.iK;
});
$p.j6 = (function(nd) {
  this.iK = this.mz.hg(nd.cT);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  gY: 1,
  aV: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.fM = null;
  this.fM = runtimeClass;
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
$p.r = (function() {
  return $m_sr_Statics$().N(this.fM);
});
$p.v = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.fM);
});
$p.aZ = (function() {
  return this.fM;
});
$p.bA = (function(len) {
  return this.fM.a2.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  hd: 1,
  G: 1,
  P: 1,
  Q: 1,
  a: 1,
  d: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2(key$2) {
  this.gu = null;
  this.gv = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$2, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2, "com.raquo.laminar.defs.styles.StyleProps$$anon$2", ({
  dB: 1,
  bj: 1,
  aa: 1,
  bf: 1,
  bh: 1,
  dD: 1,
  dG: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.bL = null;
  this.z = 0;
  this.bC = 0;
  this.ib = null;
  this.ib = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.qD = (function() {
  if ((this.z >= this.ib.a.length)) {
    $m_sc_Iterator$().G.h();
  }
  var r = this.ib.a[this.z];
  this.z = ((1 + this.z) | 0);
  return r;
});
$p.h = (function() {
  return this.qD();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  fn: 1,
  a0: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.bL = null;
  this.z = 0;
  this.bC = 0;
  this.ic = null;
  this.ic = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.qE = (function() {
  if ((this.z >= this.ic.a.length)) {
    $m_sc_Iterator$().G.h();
  }
  var r = this.ic.a[this.z];
  this.z = ((1 + this.z) | 0);
  return r;
});
$p.h = (function() {
  return $bC(this.qE());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  fo: 1,
  a0: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.bL = null;
  this.z = 0;
  this.bC = 0;
  this.id = null;
  this.id = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.qF = (function() {
  if ((this.z >= this.id.a.length)) {
    $m_sc_Iterator$().G.h();
  }
  var r = this.id.a[this.z];
  this.z = ((1 + this.z) | 0);
  return r;
});
$p.h = (function() {
  return this.qF();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  fp: 1,
  a0: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.bL = null;
  this.z = 0;
  this.bC = 0;
  this.ie = null;
  this.ie = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.qG = (function() {
  if ((this.z >= this.ie.a.length)) {
    $m_sc_Iterator$().G.h();
  }
  var r = this.ie.a[this.z];
  this.z = ((1 + this.z) | 0);
  return r;
});
$p.h = (function() {
  return this.qG();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  fq: 1,
  a0: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.bL = null;
  this.z = 0;
  this.bC = 0;
  this.ig = null;
  this.ig = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.qH = (function() {
  if ((this.z >= this.ig.a.length)) {
    $m_sc_Iterator$().G.h();
  }
  var r = this.ig.a[this.z];
  this.z = ((1 + this.z) | 0);
  return r;
});
$p.h = (function() {
  return this.qH();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  fr: 1,
  a0: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.bL = null;
  this.z = 0;
  this.bC = 0;
  this.ih = null;
  this.ih = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.qI = (function() {
  if ((this.z >= this.ih.a.length)) {
    $m_sc_Iterator$().G.h();
  }
  var t = this.ih.a[this.z];
  var lo = t.o;
  var hi = t.q;
  this.z = ((1 + this.z) | 0);
  return new $c_RTLong(lo, hi);
});
$p.h = (function() {
  return this.qI();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  fs: 1,
  a0: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.bL = null;
  this.z = 0;
  this.bC = 0;
  this.ii = null;
  this.ii = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.qJ = (function() {
  if ((this.z >= this.ii.a.length)) {
    $m_sc_Iterator$().G.h();
  }
  var r = this.ii.a[this.z];
  this.z = ((1 + this.z) | 0);
  return r;
});
$p.h = (function() {
  return this.qJ();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  ft: 1,
  a0: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.bL = null;
  this.z = 0;
  this.bC = 0;
  this.m3 = null;
  this.m3 = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.qK = (function() {
  if ((this.z >= this.m3.a.length)) {
    $m_sc_Iterator$().G.h();
  }
  this.z = ((1 + this.z) | 0);
});
$p.h = (function() {
  this.qK();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  fu: 1,
  a0: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.bL = null;
  this.z = 0;
  this.bC = 0;
  this.ij = null;
  this.ij = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.qL = (function() {
  if ((this.z >= this.ij.a.length)) {
    $m_sc_Iterator$().G.h();
  }
  var r = this.ij.a[this.z];
  this.z = ((1 + this.z) | 0);
  return r;
});
$p.h = (function() {
  return this.qL();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  fv: 1,
  a0: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterable$$anon$1(a$1) {
  this.m5 = null;
  this.m5 = a$1;
}
$p = $c_sc_Iterable$$anon$1.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_Iterable$$anon$1;
/** @constructor */
function $h_sc_Iterable$$anon$1() {
}
$h_sc_Iterable$$anon$1.prototype = $p;
$p.j = (function() {
  return new $c_sc_Iterator$$anon$20(this.m5);
});
$p.y = (function() {
  return 1;
});
var $d_sc_Iterable$$anon$1 = new $TypeData().i($c_sc_Iterable$$anon$1, "scala.collection.Iterable$$anon$1", ({
  fD: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bU() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.a3)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.iE = 0;
  this.mu = 0;
  this.eJ = null;
  this.mv = false;
  this.iF = null;
  this.eJ = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.mv = (elementClass === $d_C.l());
  this.iF = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.mS = (function(elem) {
  var unboxedElem = (this.mv ? $uC(elem) : ((elem === null) ? this.eJ.a2.z : elem));
  this.iF.push(unboxedElem);
  return this;
});
$p.oV = (function(xs) {
  var it = xs.j();
  while (it.l()) {
    this.mS(it.h());
  }
  return this;
});
$p.r7 = (function(size) {
});
$p.ba = (function() {
  var elemRuntimeClass = ((this.eJ === $d_V.l()) ? $d_jl_Void.l() : (((this.eJ === $d_sr_Null$.l()) || (this.eJ === $d_sr_Nothing$.l())) ? $d_O.l() : this.eJ));
  return elemRuntimeClass.a2.r().w(this.iF);
});
$p.v = (function() {
  return "ArrayBuilder.generic";
});
$p.bb = (function(elems) {
  return this.oV(elems);
});
$p.aU = (function(elem) {
  return this.mS(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  gP: 1,
  gO: 1,
  a9: 1,
  M: 1,
  J: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.ik = null;
  this.cI = 0;
  this.bM = 0;
  this.my = null;
  this.mx = 0;
  this.my = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.mx = (mutationCount.T() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.l = (function() {
  $m_scm_MutationTracker$().ne(this.mx, (this.my.T() | 0), "mutation occurred during iteration");
  return (this.bM > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  gT: 1,
  bC: 1,
  n: 1,
  o: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.ao = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.v = (function() {
  return this.ao;
});
$p.k = (function(that) {
  return (this === that);
});
$p.r = (function() {
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
    this.ax = null;
    this.ax = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  g3() {
    return $dp_toString__T(this.ax);
  }
  aY() {
    return "JavaScriptException";
  }
  aW() {
    return 1;
  }
  aX(x$1) {
    return ((x$1 === 0) ? this.ax : $m_sr_Statics$().dP(x$1));
  }
  be() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  r() {
    return $m_s_util_hashing_MurmurHash3$().cB(this, (-889275714), false);
  }
  k(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().p(this.ax, x$1.ax)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  cs: 1,
  E: 1,
  D: 1,
  u: 1,
  a: 1,
  B: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.jr() === (void 0)))) {
    $thiz.iP($m_Lcom_raquo_airstream_core_Signal$().nU());
  }
  $thiz.nR(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.jr();
  if ((x === (void 0))) {
    $thiz.iP($m_Lcom_raquo_airstream_core_Signal$().nU());
    var nextValue = $thiz.j1();
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
  var isError = nextValue.nL();
  var elem = false;
  elem = false;
  $thiz.cA(false);
  var this$ = $thiz.cZ();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.eW(nextValue);
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
    observer$1.hd(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cA(true);
  var x = $thiz.ek();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].T();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.ck(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().ce(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cA(false);
  var this$ = $thiz.cZ();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.eV(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().ce(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.d2();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.jy(nextValue, transaction);
  }
  $thiz.cA(true);
  var x = $thiz.ek();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].T();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.cA(false);
  var this$ = $thiz.cZ();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.g8(nextError);
  }
  var this$$1 = $thiz.d2();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.nY(nextError, transaction);
  }
  $thiz.cA(true);
  var x = $thiz.ek();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].T();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33(key$33) {
  this.gu = null;
  this.gv = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$33, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33, "com.raquo.laminar.defs.styles.StyleProps$$anon$33", ({
  dC: 1,
  bj: 1,
  aa: 1,
  bf: 1,
  bh: 1,
  dF: 1,
  dH: 1,
  dE: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.d())) {
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
  if (($thiz.bd(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.g7();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.j();
    var different = false;
    while (it.l()) {
      var next = it.h();
      if (seen.gW(f.e(next))) {
        builder.aU(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.ba() : $thiz);
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.ao = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.aZ = (function() {
  return $d_Z.l();
});
$p.bA = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.ao = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.aZ = (function() {
  return $d_B.l();
});
$p.bA = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.ao = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.aZ = (function() {
  return $d_C.l();
});
$p.bA = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.ao = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.aZ = (function() {
  return $d_D.l();
});
$p.bA = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.ao = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.aZ = (function() {
  return $d_F.l();
});
$p.bA = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.ao = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.aZ = (function() {
  return $d_I.l();
});
$p.bA = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.ao = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.aZ = (function() {
  return $d_J.l();
});
$p.bA = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.cV = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.v = (function() {
  return this.cV;
});
$p.k = (function(that) {
  return (this === that);
});
$p.r = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.ao = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.aZ = (function() {
  return $d_S.l();
});
$p.bA = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.ao = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.aZ = (function() {
  return $d_V.l();
});
$p.bA = (function(len) {
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
$p.bq = (function() {
  return $m_sc_View$();
});
$p.v = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bl = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.aL() === that.aL())) {
      try {
        return $thiz.rj(that);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.aN)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aN)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.cV = null;
  this.cV = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.aZ = (function() {
  return $d_O.l();
});
$p.bA = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  hf: 1,
  aA: 1,
  az: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.ao = null;
  this.ao = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  hh: 1,
  hg: 1,
  a4: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.ao = null;
  this.ao = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  hj: 1,
  hi: 1,
  a4: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.ao = null;
  this.ao = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  hl: 1,
  hk: 1,
  a4: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.ao = null;
  this.ao = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  hn: 1,
  hm: 1,
  a4: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.ao = null;
  this.ao = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  hp: 1,
  ho: 1,
  a4: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.ao = null;
  this.ao = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  hr: 1,
  hq: 1,
  a4: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.ao = null;
  this.ao = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  ht: 1,
  hs: 1,
  a4: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.cV = null;
  this.cV = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.aZ = (function() {
  return $d_sr_Nothing$.l();
});
$p.bA = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  hu: 1,
  aA: 1,
  az: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.cV = null;
  this.cV = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.aZ = (function() {
  return $d_sr_Null$.l();
});
$p.bA = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  hv: 1,
  aA: 1,
  az: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.cV = null;
  this.cV = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.aZ = (function() {
  return $d_O.l();
});
$p.bA = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  hw: 1,
  aA: 1,
  az: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.ao = null;
  this.ao = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  hy: 1,
  hx: 1,
  a4: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.ao = null;
  this.ao = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  hA: 1,
  hz: 1,
  a4: 1,
  T: 1,
  G: 1,
  P: 1,
  Q: 1,
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
  this.hn = null;
  this.hn = \u03b4name$2;
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
$p.aW = (function() {
  return 0;
});
$p.aX = (function(n) {
  return $f_sr_EnumValue__productElement__I__O(this, n);
});
$p.aY = (function() {
  return this.hn;
});
$p.v = (function() {
  return this.hn;
});
var $d_Ladversaries_Stage$$anon$1 = new $TypeData().i($c_Ladversaries_Stage$$anon$1, "adversaries.Stage$$anon$1", ({
  cD: 1,
  cB: 1,
  d: 1,
  B: 1,
  a: 1,
  he: 1,
  hI: 1,
  ay: 1,
  co: 1,
  ha: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.gm, $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.gm, $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.k6 = null;
  this.k5 = false;
  this.k7 = null;
  this.k3 = null;
  this.k4 = null;
  this.k9 = false;
  this.k8 = 0;
  this.gl = 0;
  this.gk = null;
  this.k6 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.gk = makeConfig.pe(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => this.gl)), new $c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.ej = (function() {
  return this.k6;
});
$p.ee = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.g5 = (function() {
  return this.k5;
});
$p.ek = (function() {
  return this.k7;
});
$p.cA = (function(x$1) {
  this.k5 = x$1;
});
$p.g6 = (function(x$1) {
  this.k7 = x$1;
});
$p.k = (function(obj) {
  return (this === obj);
});
$p.r = (function() {
  return $systemIdentityHashCode(this);
});
$p.h9 = (function(observer) {
});
$p.cZ = (function() {
  return this.k3;
});
$p.d2 = (function() {
  return this.k4;
});
$p.hi = (function() {
  return this.k9;
});
$p.f3 = (function(x$1) {
  this.k9 = x$1;
});
$p.h0 = (function(x$0) {
  this.k3 = x$0;
});
$p.h1 = (function(x$0) {
  this.k4 = x$0;
});
$p.gc = (function() {
  return this.k8;
});
$p.he = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.hb = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.f0 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  cW: 1,
  am: 1,
  a5: 1,
  aq: 1,
  ar: 1,
  b7: 1,
  b5: 1,
  at: 1,
  b9: 1,
  cS: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.kD = null;
  this.kC = false;
  this.kE = null;
  this.hC = 0;
  this.kA = null;
  this.kB = null;
  this.kH = false;
  this.hD = null;
  this.kF = null;
  this.kG = 0;
  this.kF = parentDisplayName;
  this.kD = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.hC = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hD = (void 0);
  this.kG = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.ej = (function() {
  return this.kD;
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.g5 = (function() {
  return this.kC;
});
$p.ek = (function() {
  return this.kE;
});
$p.cA = (function(x$1) {
  this.kC = x$1;
});
$p.g6 = (function(x$1) {
  this.kE = x$1;
});
$p.hc = (function() {
});
$p.k = (function(obj) {
  return (this === obj);
});
$p.r = (function() {
  return $systemIdentityHashCode(this);
});
$p.iO = (function() {
  return this.hC;
});
$p.iP = (function(x$1) {
  this.hC = x$1;
});
$p.hb = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.h9 = (function(observer) {
  observer.eW($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cZ = (function() {
  return this.kA;
});
$p.d2 = (function() {
  return this.kB;
});
$p.hi = (function() {
  return this.kH;
});
$p.f3 = (function(x$1) {
  this.kH = x$1;
});
$p.h0 = (function(x$0) {
  this.kA = x$0;
});
$p.h1 = (function(x$0) {
  this.kB = x$0;
});
$p.jr = (function() {
  return this.hD;
});
$p.nR = (function(x$1) {
  this.hD = x$1;
});
$p.jF = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.gc = (function() {
  return this.kG;
});
$p.j1 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.he = (function() {
});
$p.ee = (function() {
  return (this.kF.T() + ".signal");
});
$p.f0 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  db: 1,
  am: 1,
  a5: 1,
  aq: 1,
  ar: 1,
  aD: 1,
  b6: 1,
  at: 1,
  b8: 1,
  d6: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.gY($thiz)) {
        return $thiz.eX(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.m)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.m)));
}
/** @constructor */
function $c_sc_View$$anon$1(it$1) {
  this.mg = null;
  this.mg = it$1;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.j = (function() {
  return this.mg.T();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  fW: 1,
  ac: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a3: 1,
  a: 1
}));
/** @constructor */
function $c_sc_View$DistinctBy(underlying, f) {
  this.gH = null;
  this.mh = null;
  this.gH = underlying;
  this.mh = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.j = (function() {
  return new $c_sc_Iterator$$anon$8(this.gH.j(), this.mh);
});
$p.y = (function() {
  return ((this.gH.y() === 0) ? 0 : (-1));
});
$p.d = (function() {
  return this.gH.d();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  fX: 1,
  ac: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a3: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.hv = ($thiz.d4 !== null);
  $thiz.gn = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.d4);
  if ($thiz.hv) {
    var newParentLastUpdateId = $thiz.d4.iO();
    if ((newParentLastUpdateId !== $thiz.gn)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.j1(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.gn = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.hv) {
    $thiz.gn = $thiz.d4.iO();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.d4, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.d4, $thiz);
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
$p.bl = (function() {
  return "Set";
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.rj = (function(that) {
  return this.eR(that);
});
$p.e = (function(v1) {
  return this.ca(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.aL() === o.aL())) {
      try {
        return $thiz.eR(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x2) => ((kv$2$2) => $m_sr_BoxesRunTime$().p(x2.d0(kv$2$2.bn(), $m_sc_Map$().md), kv$2$2.bj())))(o)));
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.a6)));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.ke = null;
  this.kd = false;
  this.kf = null;
  this.ka = null;
  this.kc = null;
  this.kh = false;
  this.gm = null;
  this.kb = null;
  this.kg = 0;
  this.gm = parent;
  this.kb = fn;
  this.ke = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.kg = ((1 + parent.gc()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.ej = (function() {
  return this.ke;
});
$p.ee = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.g5 = (function() {
  return this.kd;
});
$p.ek = (function() {
  return this.kf;
});
$p.cA = (function(x$1) {
  this.kd = x$1;
});
$p.g6 = (function(x$1) {
  this.kf = x$1;
});
$p.k = (function(obj) {
  return (this === obj);
});
$p.r = (function() {
  return $systemIdentityHashCode(this);
});
$p.h9 = (function(observer) {
});
$p.cZ = (function() {
  return this.ka;
});
$p.d2 = (function() {
  return this.kc;
});
$p.hi = (function() {
  return this.kh;
});
$p.f3 = (function(x$1) {
  this.kh = x$1;
});
$p.h0 = (function(x$0) {
  this.ka = x$0;
});
$p.h1 = (function(x$0) {
  this.kc = x$0;
});
$p.he = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.gm);
});
$p.hb = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.hd = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.gc = (function() {
  return this.kg;
});
$p.jy = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.kb.e(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var $x_1;
      if ($m_s_util_control_NonFatal$().dK(e$2)) {
        var $x_1 = new $c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
    }
  }
  $x_1.ck(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
    if ((!nextValue.d())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.O(), transaction);
    }
  })));
});
$p.nY = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.f0 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  cX: 1,
  am: 1,
  a5: 1,
  aq: 1,
  ar: 1,
  b7: 1,
  b5: 1,
  at: 1,
  b9: 1,
  aB: 1,
  cH: 1,
  cE: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.kl = null;
  this.kk = false;
  this.km = null;
  this.ht = 0;
  this.ki = null;
  this.kj = null;
  this.ko = false;
  this.hu = null;
  this.hv = false;
  this.gn = 0;
  this.d4 = null;
  this.hw = null;
  this.hx = null;
  this.kn = 0;
  this.d4 = parent;
  this.hw = project;
  this.hx = recover;
  this.kl = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.ht = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.hu = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.kn = ((1 + parent.gc()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.ej = (function() {
  return this.kl;
});
$p.ee = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.v = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.g5 = (function() {
  return this.kk;
});
$p.ek = (function() {
  return this.km;
});
$p.cA = (function(x$1) {
  this.kk = x$1;
});
$p.g6 = (function(x$1) {
  this.km = x$1;
});
$p.k = (function(obj) {
  return (this === obj);
});
$p.r = (function() {
  return $systemIdentityHashCode(this);
});
$p.iO = (function() {
  return this.ht;
});
$p.iP = (function(x$1) {
  this.ht = x$1;
});
$p.h9 = (function(observer) {
  observer.eW($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.cZ = (function() {
  return this.ki;
});
$p.d2 = (function() {
  return this.kj;
});
$p.hi = (function() {
  return this.ko;
});
$p.f3 = (function(x$1) {
  this.ko = x$1;
});
$p.h0 = (function(x$0) {
  this.ki = x$0;
});
$p.h1 = (function(x$0) {
  this.kj = x$0;
});
$p.jr = (function() {
  return this.hu;
});
$p.nR = (function(x$1) {
  this.hu = x$1;
});
$p.jF = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.jy = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.nY = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.he = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.hb = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.gc = (function() {
  return this.kn;
});
$p.hd = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.ck(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.hx;
    if (this$2.d()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.O();
      try {
        var $x_1 = new $c_s_util_Success(x0.bx(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().dK(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
        }
      }
      $x_1.ck(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.d())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.O(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.jq(this.hw), transaction);
  })));
});
$p.j1 = (function() {
  var originalValue = this.d4.jF().jq(this.hw);
  return originalValue.ck(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError) => {
    var this$2 = this.hx;
    if (this$2.d()) {
      return originalValue;
    } else {
      var x0 = this$2.O();
      try {
        var $x_1 = new $c_s_util_Success(x0.bx(nextError, new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchEnd8: {
          var $x_1;
          if ($m_s_util_control_NonFatal$().dK(e$2)) {
            var $x_1 = new $c_s_util_Failure(e$2);
            break matchEnd8;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.ax : e$2);
        }
      }
      return $x_1.ck(new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$7 = (nextValue.d() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.O())));
          return (this$7.d() ? originalValue : this$7.O());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => originalValue)));
});
$p.f0 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  cY: 1,
  am: 1,
  a5: 1,
  aq: 1,
  ar: 1,
  aD: 1,
  b6: 1,
  at: 1,
  b8: 1,
  aB: 1,
  cF: 1,
  cG: 1
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
$p.gY = (function(that) {
  return true;
});
$p.k = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().oe(this);
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.aL = (function() {
  return this.m();
});
$p.cx = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.jm = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.jD = (function(otherSize) {
  return this.bd(otherSize);
});
$p.bd = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.d = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.eX = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bx = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.bV = (function(x) {
  return this.jm((x | 0));
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
$p.bl = (function() {
  return "SeqView";
});
$p.cx = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bd = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.d = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.r)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.r)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ao)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
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
$p.j = (function() {
  return $m_sc_Iterator$().G;
});
$p.y = (function() {
  return 0;
});
$p.d = (function() {
  return true;
});
$p.aY = (function() {
  return "Empty";
});
$p.aW = (function() {
  return 0;
});
$p.aX = (function(x$1) {
  return $m_sr_Statics$().dP(x$1);
});
$p.be = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return 67081517;
});
var $d_sc_View$Empty$ = new $TypeData().i($c_sc_View$Empty$, "scala.collection.View$Empty$", ({
  fY: 1,
  ac: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a3: 1,
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
  $thiz.l0 = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.os = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
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
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().qv(this);
});
$p.bl = (function() {
  return "Map";
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.g1 = (function(coll) {
  return this.nP().aK(coll);
});
$p.bx = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.ef = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.bV = (function(key) {
  return this.ca(key);
});
$p.dI = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.e1 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.e1 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.t = (function(idx) {
  return this.e1.t(idx);
});
$p.m = (function() {
  return this.e1.m();
});
$p.j = (function() {
  return this.e1.j();
});
$p.y = (function() {
  return this.e1.y();
});
$p.d = (function() {
  return this.e1.d();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  bF: 1,
  av: 1,
  ac: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a3: 1,
  a: 1,
  aw: 1,
  k: 1
}));
function $ct_sc_SeqView$Reverse__sc_SeqOps__($thiz, underlying) {
  $thiz.fw = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.fw = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.t = (function(i) {
  return this.fw.t((((((-1) + this.m()) | 0) - i) | 0));
});
$p.m = (function() {
  return this.fw.m();
});
$p.d = (function() {
  return this.fw.d();
});
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.l3 = null;
  this.l4 = false;
  this.l5 = null;
  this.l6 = false;
  this.l7 = null;
  this.l8 = false;
  this.lb = null;
  this.lc = false;
  this.kT = null;
  this.kU = false;
  this.lj = null;
  this.lk = false;
  this.kY = null;
  this.kZ = false;
  this.kV = null;
  this.kW = false;
  this.lr = null;
  this.ls = false;
  this.l9 = null;
  this.la = false;
  this.ln = null;
  this.lo = false;
  this.lf = null;
  this.lg = false;
  this.ld = null;
  this.le = false;
  this.lh = null;
  this.li = false;
  this.kR = null;
  this.kS = false;
  this.l1 = null;
  this.l2 = false;
  this.kX = null;
  this.dY = null;
  this.hG = null;
  this.or = null;
  this.kP = null;
  this.kQ = false;
  this.ll = null;
  this.lm = false;
  this.l0 = null;
  this.lp = null;
  this.lq = false;
  this.os = null;
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
$p.qc = (function() {
  if ((!this.l4)) {
    this.l3 = new $c_Lcom_raquo_laminar_tags_HtmlTag("h1", false);
    this.l4 = true;
  }
  return this.l3;
});
$p.nH = (function() {
  if ((!this.l6)) {
    this.l5 = new $c_Lcom_raquo_laminar_tags_HtmlTag("h2", false);
    this.l6 = true;
  }
  return this.l5;
});
$p.nI = (function() {
  if ((!this.l8)) {
    this.l7 = new $c_Lcom_raquo_laminar_tags_HtmlTag("h3", false);
    this.l8 = true;
  }
  return this.l7;
});
$p.qe = (function() {
  if ((!this.lc)) {
    this.lb = new $c_Lcom_raquo_laminar_tags_HtmlTag("i", false);
    this.lc = true;
  }
  return this.lb;
});
$p.nc = (function() {
  if ((!this.kU)) {
    this.kT = new $c_Lcom_raquo_laminar_tags_HtmlTag("button", false);
    this.kU = true;
  }
  return this.kT;
});
$p.qS = (function() {
  if ((!this.lk)) {
    this.lj = new $c_Lcom_raquo_laminar_tags_HtmlTag("p", false);
    this.lk = true;
  }
  return this.lj;
});
$p.dN = (function() {
  if ((!this.kZ)) {
    this.kY = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.kZ = true;
  }
  return this.kY;
});
$p.pq = (function() {
  if ((!this.kW)) {
    this.kV = new $c_Lcom_raquo_laminar_keys_HtmlProp("checked", $m_Lcom_raquo_laminar_codecs_package$().hH);
    this.kW = true;
  }
  return this.kV;
});
$p.on = (function() {
  if ((!this.ls)) {
    this.lr = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().fh);
    this.ls = true;
  }
  return this.lr;
});
$p.h6 = (function() {
  if ((!this.la)) {
    this.l9 = new $c_Lcom_raquo_laminar_keys_HtmlProp("hidden", $m_Lcom_raquo_laminar_codecs_package$().hH);
    this.la = true;
  }
  return this.l9;
});
$p.rp = (function() {
  if ((!this.lo)) {
    this.ln = new $c_Lcom_raquo_laminar_keys_HtmlProp("title", $m_Lcom_raquo_laminar_codecs_package$().fh);
    this.lo = true;
  }
  return this.ln;
});
$p.ha = (function() {
  if ((!this.lg)) {
    this.lf = new $c_Lcom_raquo_laminar_keys_EventProp("click");
    this.lg = true;
  }
  return this.lf;
});
$p.qO = (function() {
  if ((!this.le)) {
    this.ld = new $c_Lcom_raquo_laminar_keys_EventProp("change");
    this.le = true;
  }
  return this.ld;
});
$p.jx = (function() {
  if ((!this.li)) {
    this.lh = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.li = true;
  }
  return this.lh;
});
$p.nb = (function() {
  if ((!this.kS)) {
    this.kR = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$2("background-color");
    this.kS = true;
  }
  return this.kR;
});
$p.pU = (function() {
  if ((!this.l2)) {
    this.l1 = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$33("font-size");
    this.l2 = true;
  }
  return this.l1;
});
$p.oT = (function() {
  if ((!this.kQ)) {
    this.kP = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.kQ = true;
  }
  return this.kP;
});
$p.rk = (function() {
  if ((!this.lm)) {
    this.ll = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.lm = true;
  }
  return this.ll;
});
$p.rv = (function() {
  if ((!this.lq)) {
    this.lp = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.lq = true;
  }
  return this.lp;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  dr: 1,
  dI: 1,
  du: 1,
  dz: 1,
  be: 1,
  dA: 1,
  dw: 1,
  dp: 1,
  di: 1,
  dn: 1,
  bc: 1,
  bg: 1,
  bb: 1,
  dj: 1
}));
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.a7)));
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
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
$p.bl = (function() {
  return "IndexedSeqView";
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.m();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.e1 = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.j = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bl = (function() {
  return "IndexedSeqView";
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.m();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  fz: 1,
  bF: 1,
  av: 1,
  ac: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a3: 1,
  a: 1,
  aw: 1,
  k: 1,
  aJ: 1,
  q: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Reverse(underlying) {
  this.fw = null;
  $ct_sc_SeqView$Reverse__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Reverse.prototype = new $h_sc_SeqView$Reverse();
$p.constructor = $c_sc_IndexedSeqView$Reverse;
/** @constructor */
function $h_sc_IndexedSeqView$Reverse() {
}
$h_sc_IndexedSeqView$Reverse.prototype = $p;
$p.j = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bl = (function() {
  return "IndexedSeqView";
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.m();
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  fB: 1,
  fP: 1,
  av: 1,
  ac: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a3: 1,
  a: 1,
  aw: 1,
  k: 1,
  aJ: 1,
  q: 1
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
  this.iD = null;
  this.mt = null;
  this.iD = underlying;
  this.mt = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.t = (function(n) {
  return this.iD.t(n);
});
$p.m = (function() {
  return this.iD.aO;
});
$p.bU = (function() {
  return "ArrayBufferView";
});
$p.j = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.mt);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  gN: 1,
  fk: 1,
  av: 1,
  ac: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a3: 1,
  a: 1,
  aw: 1,
  k: 1,
  aJ: 1,
  q: 1
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
$p.nP = (function() {
  return $m_sci_Map$();
});
$p.bq = (function() {
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
        var a = $thiz.gX();
        var b = o.gX();
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
          equal = $m_sr_BoxesRunTime$().p($thiz.t(index), o.t(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.j().cY(index);
          var thatIt = o.j().cY(index);
          while ((equal && thisIt.l())) {
            equal = $m_sr_BoxesRunTime$().p(thisIt.h(), thatIt.h());
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
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gy)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gz)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gA)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gB)));
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
/** @constructor */
function $c_sci_Map$EmptyMap$() {
}
$p = $c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
}
$h_sci_Map$EmptyMap$.prototype = $p;
$p.aL = (function() {
  return 0;
});
$p.y = (function() {
  return 0;
});
$p.d = (function() {
  return true;
});
$p.iU = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.ca = (function(key) {
  return false;
});
$p.d0 = (function(key, default$1) {
  return default$1.T();
});
$p.j = (function() {
  return $m_sc_Iterator$().G;
});
$p.dS = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$p.e = (function(key) {
  this.iU(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  gj: 1,
  aj: 1,
  af: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a6: 1,
  ah: 1,
  j: 1,
  e: 1,
  ag: 1,
  d: 1,
  a7: 1,
  t: 1,
  ak: 1,
  a: 1
}));
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$();
  }
  return $n_sci_Map$EmptyMap$;
}
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.cg = null;
  this.dj = null;
  this.cg = key1;
  this.dj = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.aL = (function() {
  return 1;
});
$p.y = (function() {
  return 1;
});
$p.d = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().p(key, this.cg)) {
    return this.dj;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.ca = (function(key) {
  return $m_sr_BoxesRunTime$().p(key, this.cg);
});
$p.d0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().p(key, this.cg) ? this.dj : default$1.T());
});
$p.j = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cg, this.dj));
});
$p.em = (function(key, value) {
  return ($m_sr_BoxesRunTime$().p(key, this.cg) ? new $c_sci_Map$Map1(this.cg, value) : new $c_sci_Map$Map2(this.cg, this.dj, key, value));
});
$p.az = (function(f) {
  f.e(new $c_T2(this.cg, this.dj));
});
$p.eR = (function(p) {
  return (!(!p.e(new $c_T2(this.cg, this.dj))));
});
$p.r = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cn(this.cg, this.dj);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dH;
  h = $m_s_util_hashing_MurmurHash3$().g(h, a);
  h = $m_s_util_hashing_MurmurHash3$().g(h, b);
  h = $m_s_util_hashing_MurmurHash3$().d3(h, c);
  return $m_s_util_hashing_MurmurHash3$().C(h, 1);
});
$p.dS = (function(key, value) {
  return this.em(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bY)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  bY: 1,
  aj: 1,
  af: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a6: 1,
  ah: 1,
  j: 1,
  e: 1,
  ag: 1,
  d: 1,
  a7: 1,
  t: 1,
  ak: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.c1 = null;
  this.cM = null;
  this.c2 = null;
  this.cN = null;
  this.c1 = key1;
  this.cM = value1;
  this.c2 = key2;
  this.cN = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.aL = (function() {
  return 2;
});
$p.y = (function() {
  return 2;
});
$p.d = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().p(key, this.c1)) {
    return this.cM;
  } else if ($m_sr_BoxesRunTime$().p(key, this.c2)) {
    return this.cN;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.ca = (function(key) {
  return ($m_sr_BoxesRunTime$().p(key, this.c1) || $m_sr_BoxesRunTime$().p(key, this.c2));
});
$p.d0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().p(key, this.c1) ? this.cM : ($m_sr_BoxesRunTime$().p(key, this.c2) ? this.cN : default$1.T()));
});
$p.j = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.em = (function(key, value) {
  return ($m_sr_BoxesRunTime$().p(key, this.c1) ? new $c_sci_Map$Map2(this.c1, value, this.c2, this.cN) : ($m_sr_BoxesRunTime$().p(key, this.c2) ? new $c_sci_Map$Map2(this.c1, this.cM, this.c2, value) : new $c_sci_Map$Map3(this.c1, this.cM, this.c2, this.cN, key, value)));
});
$p.az = (function(f) {
  f.e(new $c_T2(this.c1, this.cM));
  f.e(new $c_T2(this.c2, this.cN));
});
$p.eR = (function(p) {
  return ((!(!p.e(new $c_T2(this.c1, this.cM)))) && (!(!p.e(new $c_T2(this.c2, this.cN)))));
});
$p.r = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cn(this.c1, this.cM);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cn(this.c2, this.cN);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dH;
  h = $m_s_util_hashing_MurmurHash3$().g(h, a);
  h = $m_s_util_hashing_MurmurHash3$().g(h, b);
  h = $m_s_util_hashing_MurmurHash3$().d3(h, c);
  return $m_s_util_hashing_MurmurHash3$().C(h, 2);
});
$p.dS = (function(key, value) {
  return this.em(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  bZ: 1,
  aj: 1,
  af: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a6: 1,
  ah: 1,
  j: 1,
  e: 1,
  ag: 1,
  d: 1,
  a7: 1,
  t: 1,
  ak: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.bQ = null;
  this.cr = null;
  this.bR = null;
  this.cs = null;
  this.bS = null;
  this.ct = null;
  this.bQ = key1;
  this.cr = value1;
  this.bR = key2;
  this.cs = value2;
  this.bS = key3;
  this.ct = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.aL = (function() {
  return 3;
});
$p.y = (function() {
  return 3;
});
$p.d = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().p(key, this.bQ)) {
    return this.cr;
  } else if ($m_sr_BoxesRunTime$().p(key, this.bR)) {
    return this.cs;
  } else if ($m_sr_BoxesRunTime$().p(key, this.bS)) {
    return this.ct;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.ca = (function(key) {
  return (($m_sr_BoxesRunTime$().p(key, this.bQ) || $m_sr_BoxesRunTime$().p(key, this.bR)) || $m_sr_BoxesRunTime$().p(key, this.bS));
});
$p.d0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().p(key, this.bQ) ? this.cr : ($m_sr_BoxesRunTime$().p(key, this.bR) ? this.cs : ($m_sr_BoxesRunTime$().p(key, this.bS) ? this.ct : default$1.T())));
});
$p.j = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.em = (function(key, value) {
  return ($m_sr_BoxesRunTime$().p(key, this.bQ) ? new $c_sci_Map$Map3(this.bQ, value, this.bR, this.cs, this.bS, this.ct) : ($m_sr_BoxesRunTime$().p(key, this.bR) ? new $c_sci_Map$Map3(this.bQ, this.cr, this.bR, value, this.bS, this.ct) : ($m_sr_BoxesRunTime$().p(key, this.bS) ? new $c_sci_Map$Map3(this.bQ, this.cr, this.bR, this.cs, this.bS, value) : new $c_sci_Map$Map4(this.bQ, this.cr, this.bR, this.cs, this.bS, this.ct, key, value))));
});
$p.az = (function(f) {
  f.e(new $c_T2(this.bQ, this.cr));
  f.e(new $c_T2(this.bR, this.cs));
  f.e(new $c_T2(this.bS, this.ct));
});
$p.eR = (function(p) {
  return (((!(!p.e(new $c_T2(this.bQ, this.cr)))) && (!(!p.e(new $c_T2(this.bR, this.cs))))) && (!(!p.e(new $c_T2(this.bS, this.ct)))));
});
$p.r = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cn(this.bQ, this.cr);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cn(this.bR, this.cs);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cn(this.bS, this.ct);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dH;
  h = $m_s_util_hashing_MurmurHash3$().g(h, a);
  h = $m_s_util_hashing_MurmurHash3$().g(h, b);
  h = $m_s_util_hashing_MurmurHash3$().d3(h, c);
  return $m_s_util_hashing_MurmurHash3$().C(h, 3);
});
$p.dS = (function(key, value) {
  return this.em(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  c0: 1,
  aj: 1,
  af: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a6: 1,
  ah: 1,
  j: 1,
  e: 1,
  ag: 1,
  d: 1,
  a7: 1,
  t: 1,
  ak: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bs = null;
  this.c3 = null;
  this.bt = null;
  this.c4 = null;
  this.bu = null;
  this.c5 = null;
  this.bv = null;
  this.c6 = null;
  this.bs = key1;
  this.c3 = value1;
  this.bt = key2;
  this.c4 = value2;
  this.bu = key3;
  this.c5 = value3;
  this.bv = key4;
  this.c6 = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.aL = (function() {
  return 4;
});
$p.y = (function() {
  return 4;
});
$p.d = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().p(key, this.bs)) {
    return this.c3;
  } else if ($m_sr_BoxesRunTime$().p(key, this.bt)) {
    return this.c4;
  } else if ($m_sr_BoxesRunTime$().p(key, this.bu)) {
    return this.c5;
  } else if ($m_sr_BoxesRunTime$().p(key, this.bv)) {
    return this.c6;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.ca = (function(key) {
  return ((($m_sr_BoxesRunTime$().p(key, this.bs) || $m_sr_BoxesRunTime$().p(key, this.bt)) || $m_sr_BoxesRunTime$().p(key, this.bu)) || $m_sr_BoxesRunTime$().p(key, this.bv));
});
$p.d0 = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().p(key, this.bs) ? this.c3 : ($m_sr_BoxesRunTime$().p(key, this.bt) ? this.c4 : ($m_sr_BoxesRunTime$().p(key, this.bu) ? this.c5 : ($m_sr_BoxesRunTime$().p(key, this.bv) ? this.c6 : default$1.T()))));
});
$p.j = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.em = (function(key, value) {
  return ($m_sr_BoxesRunTime$().p(key, this.bs) ? new $c_sci_Map$Map4(this.bs, value, this.bt, this.c4, this.bu, this.c5, this.bv, this.c6) : ($m_sr_BoxesRunTime$().p(key, this.bt) ? new $c_sci_Map$Map4(this.bs, this.c3, this.bt, value, this.bu, this.c5, this.bv, this.c6) : ($m_sr_BoxesRunTime$().p(key, this.bu) ? new $c_sci_Map$Map4(this.bs, this.c3, this.bt, this.c4, this.bu, value, this.bv, this.c6) : ($m_sr_BoxesRunTime$().p(key, this.bv) ? new $c_sci_Map$Map4(this.bs, this.c3, this.bt, this.c4, this.bu, this.c5, this.bv, value) : $m_sci_HashMap$().it.f2(this.bs, this.c3).f2(this.bt, this.c4).f2(this.bu, this.c5).f2(this.bv, this.c6).f2(key, value)))));
});
$p.az = (function(f) {
  f.e(new $c_T2(this.bs, this.c3));
  f.e(new $c_T2(this.bt, this.c4));
  f.e(new $c_T2(this.bu, this.c5));
  f.e(new $c_T2(this.bv, this.c6));
});
$p.eR = (function(p) {
  return ((((!(!p.e(new $c_T2(this.bs, this.c3)))) && (!(!p.e(new $c_T2(this.bt, this.c4))))) && (!(!p.e(new $c_T2(this.bu, this.c5))))) && (!(!p.e(new $c_T2(this.bv, this.c6)))));
});
$p.pp = (function(builder) {
  return builder.eb(this.bs, this.c3).eb(this.bt, this.c4).eb(this.bu, this.c5).eb(this.bv, this.c6);
});
$p.r = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cn(this.bs, this.c3);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cn(this.bt, this.c4);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cn(this.bu, this.c5);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cn(this.bv, this.c6);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dH;
  h = $m_s_util_hashing_MurmurHash3$().g(h, a);
  h = $m_s_util_hashing_MurmurHash3$().g(h, b);
  h = $m_s_util_hashing_MurmurHash3$().d3(h, c);
  return $m_s_util_hashing_MurmurHash3$().C(h, 4);
});
$p.dS = (function(key, value) {
  return this.em(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c1)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  c1: 1,
  aj: 1,
  af: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a6: 1,
  ah: 1,
  j: 1,
  e: 1,
  ag: 1,
  d: 1,
  a7: 1,
  t: 1,
  ak: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g6)));
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
$p.ba = (function() {
  return this;
});
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.iu)) {
    if ($thiz.gJ) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    $thiz.gJ = true;
    try {
      var res = $thiz.iv.T();
    } finally {
      $thiz.gJ = false;
    }
    $thiz.c0 = true;
    $thiz.iv = null;
    $thiz.iw = res;
    $thiz.iu = true;
  }
  return $thiz.iw;
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.n = (("" + b.n) + start);
  if ((!$thiz.c0)) {
    b.n = (b.n + "<not computed>");
  } else if ((!$thiz.d())) {
    var obj = $thiz.E().u();
    b.n = (("" + b.n) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $thiz.E().b0();
    var elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.c0) || (elem.E() !== elem$2.E())))) {
      elem = elem$2;
      if ((elem$2.c0 && (!elem$2.d()))) {
        elem$2 = elem$2.E().b0();
        while ((((elem !== elem$2) && (elem$2.c0 && (!elem$2.d()))) && (elem.E() !== elem$2.E()))) {
          b.n = (("" + b.n) + sep);
          var obj$1 = elem.E().u();
          b.n = (("" + b.n) + obj$1);
          elem = elem.E().b0();
          elem$2 = elem$2.E().b0();
          if ((elem$2.c0 && (!elem$2.d()))) {
            elem$2 = elem$2.E().b0();
          }
        }
      }
    }
    if ((!(elem$2.c0 && (!elem$2.d())))) {
      while ((elem !== elem$2)) {
        b.n = (("" + b.n) + sep);
        var obj$2 = elem.E().u();
        b.n = (("" + b.n) + obj$2);
        elem = elem.E().b0();
      }
      if ((!elem.c0)) {
        b.n = (("" + b.n) + sep);
        b.n = (b.n + "<not computed>");
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = elem$2;
        if ((!((a === b$1) || (a.E() === b$1.E())))) {
          runner = runner.E().b0();
          elem$2 = elem$2.E().b0();
          k = ((1 + k) | 0);
        } else {
          break;
        }
      }
      var a$1 = elem;
      var b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.E() === b$2.E())) && (k > 0))) {
        b.n = (("" + b.n) + sep);
        var obj$3 = elem.E().u();
        b.n = (("" + b.n) + obj$3);
        elem = elem.E().b0();
      }
      while (true) {
        var a$2 = elem;
        var b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.E() === b$3.E())))) {
          b.n = (("" + b.n) + sep);
          var obj$4 = elem.E().u();
          b.n = (("" + b.n) + obj$4);
          elem = elem.E().b0();
        } else {
          break;
        }
      }
      b.n = (("" + b.n) + sep);
      b.n = (b.n + "<cycle>");
    }
  }
  b.n = (("" + b.n) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.iw = null;
  this.iv = null;
  this.c0 = false;
  this.gJ = false;
  this.iu = false;
  this.iv = lazyState;
  this.c0 = false;
  this.gJ = false;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.bl = (function() {
  return "LinearSeq";
});
$p.m = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.bd = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.jm = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.t = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.eX = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.E = (function() {
  return ((!this.iu) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.iw);
});
$p.d = (function() {
  return (this.E() === $m_sci_LazyList$State$Empty$());
});
$p.y = (function() {
  return ((this.c0 && (this.E() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$p.u = (function() {
  return this.E().u();
});
$p.nx = (function() {
  var these = this;
  var those = this;
  if ((!these.d())) {
    these = these.E().b0();
  }
  while ((those !== these)) {
    if (these.d()) {
      return this;
    }
    these = these.E().b0();
    if (these.d()) {
      return this;
    }
    these = these.E().b0();
    if ((these === those)) {
      return this;
    }
    those = those.E().b0();
  }
  return this;
});
$p.j = (function() {
  return ((this.c0 && (this.E() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().G : new $c_sci_LazyList$LazyIterator(this));
});
$p.az = (function(f) {
  var _$this = this;
  while (true) {
    if ((!_$this.d())) {
      f.e(_$this.E().u());
      _$this = _$this.E().b0();
      continue;
    }
    break;
  }
});
$p.bU = (function() {
  return "LazyList";
});
$p.gZ = (function(pf) {
  var _$this = this;
  while (true) {
    if (_$this.d()) {
      return $m_s_None$();
    } else {
      var res = pf.bx(_$this.E().u(), $m_sci_LazyList$().mj);
      if ((res === $m_sr_Statics$PFMarker$())) {
        _$this = _$this.E().b0();
      } else {
        return new $c_s_Some(res);
      }
    }
  }
});
$p.pL = (function(n) {
  return ((n <= 0) ? this : ((this.c0 && (this.E() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().gK : $m_sci_LazyList$().ra(this, n)));
});
$p.dI = (function(sb, start, sep, end) {
  this.nx();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.b9, start, sep, end);
  return sb;
});
$p.v = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").n;
});
$p.e = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.bV = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.nm = (function(n) {
  return this.pL(n);
});
$p.x = (function() {
  return this.E().b0();
});
$p.bq = (function() {
  return $m_sci_LazyList$();
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bW)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  bW: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  aO: 1,
  ao: 1,
  aK: 1,
  aP: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gJ)));
}
function $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, array) {
  $thiz.gQ = array;
  return $thiz;
}
function $ct_sjsr_WrappedVarArgs__($thiz) {
  $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs() {
  this.gQ = null;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cx = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.gY = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.eX = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.gX = (function() {
  return $m_sci_IndexedSeqDefaults$().mi;
});
$p.j = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.u = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.m();
});
$p.k = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().oe(this);
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.aL = (function() {
  return this.m();
});
$p.jD = (function(otherSize) {
  var x = this.m();
  return ((x === otherSize) ? 0 : ((x < otherSize) ? (-1) : 1));
});
$p.d = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bx = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.g7 = (function() {
  return $m_sjsr_WrappedVarArgs$().aV();
});
$p.az = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.by = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.gZ = (function(pf) {
  return $f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this, pf);
});
$p.dI = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.jE = (function() {
  return $m_sci_Vector$().bc(this);
});
$p.dQ = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.m = (function() {
  return (this.gQ.length | 0);
});
$p.t = (function(idx) {
  return this.gQ[idx];
});
$p.bU = (function() {
  return "WrappedVarArgs";
});
$p.eS = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().jb(coll);
});
$p.bV = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.e = (function(v1) {
  return this.t((v1 | 0));
});
$p.bq = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ct)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  ct: 1,
  y: 1,
  v: 1,
  t: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  w: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.bm = null;
  this.bm = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.nP = (function() {
  return $m_sci_HashMap$();
});
$p.y = (function() {
  return this.bm.b2;
});
$p.aL = (function() {
  return this.bm.b2;
});
$p.d = (function() {
  return (this.bm.b2 === 0);
});
$p.j = (function() {
  return (this.d() ? $m_sc_Iterator$().G : new $c_sci_MapKeyValueTupleIterator(this.bm));
});
$p.ca = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().N(key);
  var keyHash = $m_sc_Hashing$().cl(keyUnimprovedHash);
  return this.bm.j0(key, keyUnimprovedHash, keyHash, 0);
});
$p.e = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().N(key);
  var keyHash = $m_sc_Hashing$().cl(keyUnimprovedHash);
  return this.bm.iS(key, keyUnimprovedHash, keyHash, 0);
});
$p.d0 = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().N(key);
  var keyHash = $m_sc_Hashing$().cl(keyUnimprovedHash);
  return this.bm.jd(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.f2 = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().N(key);
  var newRootNode = this.bm.ol(key, value, keyUnimprovedHash, $m_sc_Hashing$().cl(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bm) ? this : new $c_sci_HashMap(newRootNode));
});
$p.az = (function(f) {
  this.bm.az(f);
});
$p.ef = (function(f) {
  this.bm.ef(f);
});
$p.k = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bm;
      var x$2 = that.bm;
      return ((x === null) ? (x$2 === null) : x.k(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.r = (function() {
  if (this.d()) {
    return $m_s_util_hashing_MurmurHash3$().iM;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bm);
    return $m_s_util_hashing_MurmurHash3$().jG(hashIterator, $m_s_util_hashing_MurmurHash3$().dH);
  }
});
$p.bU = (function() {
  return "HashMap";
});
$p.u = (function() {
  return this.j().h();
});
$p.dS = (function(key, value) {
  return this.f2(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bV)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  bV: 1,
  aj: 1,
  af: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  a6: 1,
  ah: 1,
  j: 1,
  e: 1,
  ag: 1,
  d: 1,
  a7: 1,
  t: 1,
  ak: 1,
  gC: 1,
  fS: 1,
  l: 1,
  U: 1,
  a: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gD)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gH)));
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
$p.bb = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (((-1) + $thiz.b7.a.length) | 0));
  var x1 = $thiz.b7.a[idx];
  if ((x1 === null)) {
    $thiz.b7.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.cT <= hash))) {
      if (((n.cT === hash) && $m_sr_BoxesRunTime$().p(elem, n.eK))) {
        return false;
      }
      prev = n;
      n = n.b8;
    }
    if ((prev === null)) {
      $thiz.b7.a[idx] = new $c_scm_HashSet$Node(elem, hash, x1);
    } else {
      prev.b8 = new $c_scm_HashSet$Node(elem, hash, prev.b8);
    }
  }
  $thiz.dC = ((1 + $thiz.dC) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.b7.a.length;
  $thiz.iJ = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.dC === 0)) {
    $thiz.b7 = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.b7 = $m_ju_Arrays$().a9($thiz.b7, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.b7.a[i];
        if ((old !== null)) {
          preLow.b8 = null;
          preHigh.b8 = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.b8;
            if (((n.cT & oldlen) === 0)) {
              lastLow.b8 = n;
              lastLow = n;
            } else {
              lastHigh.b8 = n;
              lastHigh = n;
            }
            n = next;
          }
          lastLow.b8 = null;
          if ((old !== preLow.b8)) {
            $thiz.b7.a[i] = preLow.b8;
          }
          if ((preHigh.b8 !== null)) {
            $thiz.b7.a[((i + oldlen) | 0)] = preHigh.b8;
            lastHigh.b8 = null;
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
  return $doubleToInt((size * $thiz.iI));
}
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.iI = loadFactor;
  $thiz.b7 = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.iJ = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.b7.a.length);
  $thiz.dC = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet() {
  this.iI = 0.0;
  this.b7 = null;
  this.iJ = 0;
  this.dC = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.aL = (function() {
  return this.dC;
});
$p.hg = (function(originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
});
$p.ca = (function(elem) {
  var hash = this.hg($m_sr_Statics$().N(elem));
  var x1 = this.b7.a[(hash & (((-1) + this.b7.a.length) | 0))];
  return (((x1 === null) ? null : x1.pT(elem, hash)) !== null);
});
$p.bf = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.iI)));
  if ((target > this.b7.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.gW = (function(elem) {
  if ((((1 + this.dC) | 0) >= this.iJ)) {
    $p_scm_HashSet__growTable__I__V(this, (this.b7.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, this.hg($m_sr_Statics$().N(elem)));
});
$p.mR = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc(((k$2$2, h$2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, k$2$2, this.hg((h$2$2 | 0)));
    }));
    xs.rA.rZ(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.l()) {
      var next = iter.h();
      $p_scm_HashSet__addElem__O__I__Z(this, next.eK, next.cT);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.pN();
    while (iter$2.l()) {
      var next$2 = iter$2.h();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.nN(), next$2.nJ());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.j = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.bq = (function() {
  return $m_scm_HashSet$();
});
$p.y = (function() {
  return this.dC;
});
$p.d = (function() {
  return (this.dC === 0);
});
$p.bU = (function() {
  return "HashSet";
});
$p.r = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.l()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().jG(hashIterator, $m_s_util_hashing_MurmurHash3$().mM);
});
$p.aU = (function(elem) {
  this.gW(elem);
  return this;
});
$p.bb = (function(elems) {
  return this.mR(elems);
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  ck: 1,
  gK: 1,
  fl: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  aN: 1,
  fQ: 1,
  e: 1,
  d: 1,
  h8: 1,
  K: 1,
  h9: 1,
  I: 1,
  A: 1,
  M: 1,
  J: 1,
  H: 1,
  ax: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gh)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.h4)));
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
$p.g1 = (function(coll) {
  return $m_sci_ArraySeq$().j9(coll, this.ay());
});
$p.g7 = (function() {
  return $m_sci_ArraySeq$().h8(this.ay());
});
$p.cx = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.gY = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.eX = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.u = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.m();
});
$p.dQ = (function() {
  return $m_sci_ArraySeq$().ir;
});
$p.bU = (function() {
  return "ArraySeq";
});
$p.by = (function(xs, start, len) {
  var srcLen = this.m();
  var destLen = $m_jl_reflect_Array$().cb(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().fY(this.cC(), 0, xs, start, copied);
  }
  return copied;
});
$p.gX = (function() {
  return 2147483647;
});
$p.eS = (function(coll) {
  return $m_sci_ArraySeq$().j9(coll, this.ay());
});
$p.bq = (function() {
  return $m_sci_ArraySeq$().ir;
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
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
$p.cx = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.gY = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.eX = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.m();
});
$p.dQ = (function() {
  return $m_sci_Vector$();
});
$p.m = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.f : this.b.a.length);
});
$p.j = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().mr : new $c_sci_NewVectorIterator(this, this.m(), this.co()));
});
$p.pc = (function(suffix) {
  var k = suffix.y();
  return ((k === 0) ? this : ((k < 0) ? $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix) : this.bH(suffix, k)));
});
$p.bH = (function(suffix, k) {
  if ((k < ((4 + this.co()) | 0))) {
    var v = new $c_sr_ObjectRef(this);
    if ($is_sci_Iterable(suffix)) {
      suffix.az(new $c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => {
        v.ae = v.ae.bk(x$2$2);
      })));
    } else {
      var this$2 = suffix.j();
      while (this$2.l()) {
        var x0 = this$2.h();
        v.ae = v.ae.bk(x0);
      }
    }
    return v.ae;
  } else if (((this.m() < ((k >>> 5) | 0)) && (suffix instanceof $c_sci_Vector))) {
    var v$2 = suffix;
    var ri = new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(new $c_sc_IndexedSeqView$Id(this));
    while ((ri.bi > 0)) {
      v$2 = v$2.el(ri.h());
    }
    return v$2;
  } else {
    return (((this.m() < (((-64) + k) | 0)) && (suffix instanceof $c_sci_Vector)) ? new $c_sci_VectorBuilder().pa(this.m(), suffix).fO(this).fO(suffix).hf() : new $c_sci_VectorBuilder().nK(this).fO(suffix).hf());
  }
});
$p.bU = (function() {
  return "Vector";
});
$p.by = (function(xs, start, len) {
  return this.j().by(xs, start, len);
});
$p.jE = (function() {
  return this;
});
$p.gX = (function() {
  return $m_sci_Vector$().mq;
});
$p.aR = (function(index) {
  return $m_scg_CommonErrors$().g4(index, (((-1) + this.m()) | 0));
});
$p.u = (function() {
  if ((this.b.a.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.b.a[0];
  }
});
$p.az = (function(f) {
  var c = this.co();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $x_1.j7((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.cD(i), f);
    i = ((1 + i) | 0);
  }
});
$p.bq = (function() {
  return $m_sci_Vector$();
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
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
$p.cx = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.bd = (function(len) {
  var x = this.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.m();
});
$p.dQ = (function() {
  return $m_scm_ArraySeq$().iH;
});
$p.nF = (function(coll) {
  var evidence$1 = this.ay();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aZ();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.y();
  var it = coll.j();
  while (it.l()) {
    var elem = it.h();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.a2.z : elem));
    jsElems.push(unboxedElem);
  }
  var $x_1 = $m_scm_ArraySeq$();
  var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
  return $x_1.jp(elemRuntimeClass.a2.r().w(jsElems));
});
$p.g7 = (function() {
  return $m_scm_ArraySeq$().h8(this.ay());
});
$p.bU = (function() {
  return "ArraySeq";
});
$p.by = (function(xs, start, len) {
  var srcLen = this.m();
  var destLen = $m_jl_reflect_Array$().cb(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().fY(this.c9(), 0, xs, start, copied);
  }
  return copied;
});
$p.k = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().cb(this.c9()) !== $m_jl_reflect_Array$().cb(other.c9()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.eS = (function(coll) {
  return this.nF(coll);
});
$p.g1 = (function(coll) {
  return this.nF(coll);
});
$p.bq = (function() {
  return $m_scm_ArraySeq$().iH;
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Y)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.da = null;
  this.da = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.m = (function() {
  return this.da.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.na(this.da, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().nv(this.da, that.da) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.da);
});
$p.fX = (function(i) {
  return this.da.a[i];
});
$p.e = (function(v1) {
  return this.fX((v1 | 0));
});
$p.t = (function(i) {
  return this.fX(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.cC = (function() {
  return this.da;
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bI)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  bI: 1,
  X: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  a1: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.db = null;
  this.db = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.m = (function() {
  return this.db.a.length;
});
$p.fP = (function(i) {
  return this.db.a[i];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n2(this.db, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().np(this.db, that.db) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.db);
});
$p.e = (function(v1) {
  return this.fP((v1 | 0));
});
$p.t = (function(i) {
  return this.fP(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.cC = (function() {
  return this.db;
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  bJ: 1,
  X: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  a1: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.cK = null;
  this.cK = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.m = (function() {
  return this.cK.a.length;
});
$p.fQ = (function(i) {
  return this.cK.a[i];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n3(this.cK, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().nq(this.cK, that.cK) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.cK);
});
$p.dI = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.cK).dI(sb, start, sep, end);
});
$p.e = (function(v1) {
  return $bC(this.fQ((v1 | 0)));
});
$p.t = (function(i) {
  return $bC(this.fQ(i));
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.cC = (function() {
  return this.cK;
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  bK: 1,
  X: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  a1: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.dc = null;
  this.dc = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.m = (function() {
  return this.dc.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n4(this.dc, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofDouble) ? $m_ju_Arrays$().nr(this.dc, that.dc) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dc);
});
$p.fS = (function(i) {
  return this.dc.a[i];
});
$p.e = (function(v1) {
  return this.fS((v1 | 0));
});
$p.t = (function(i) {
  return this.fS(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.cC = (function() {
  return this.dc;
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bL)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  bL: 1,
  X: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  a1: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.dd = null;
  this.dd = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.m = (function() {
  return this.dd.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n5(this.dd, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofFloat) ? $m_ju_Arrays$().ns(this.dd, that.dd) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dd);
});
$p.fT = (function(i) {
  return this.dd.a[i];
});
$p.e = (function(v1) {
  return this.fT((v1 | 0));
});
$p.t = (function(i) {
  return this.fT(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.cC = (function() {
  return this.dd;
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bM)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  bM: 1,
  X: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  a1: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.de = null;
  this.de = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.m = (function() {
  return this.de.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n6(this.de, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().j4(this.de, that.de) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.de);
});
$p.fU = (function(i) {
  return this.de.a[i];
});
$p.e = (function(v1) {
  return this.fU((v1 | 0));
});
$p.t = (function(i) {
  return this.fU(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.cC = (function() {
  return this.de;
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bN)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  bN: 1,
  X: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  a1: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.df = null;
  this.df = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.m = (function() {
  return this.df.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n7(this.df, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().nt(this.df, that.df) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.df);
});
$p.fV = (function(i) {
  return this.df.a[i];
});
$p.e = (function(v1) {
  return this.fV((v1 | 0));
});
$p.t = (function(i) {
  return this.fV(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.cC = (function() {
  return this.df;
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bO)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  bO: 1,
  X: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  a1: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.cp = null;
  this.cp = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.ay = (function() {
  return $m_s_reflect_ClassTag$().mY($objectGetClass(this.cp).a2.Q());
});
$p.m = (function() {
  return this.cp.a.length;
});
$p.t = (function(i) {
  return this.cp.a[i];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n1(this.cp, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().nw(this.cp, that.cp) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.j = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.cp);
});
$p.e = (function(v1) {
  return this.t((v1 | 0));
});
$p.cC = (function() {
  return this.cp;
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bP)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  bP: 1,
  X: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  a1: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.dg = null;
  this.dg = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.m = (function() {
  return this.dg.a.length;
});
$p.fR = (function(i) {
  return this.dg.a[i];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n8(this.dg, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().nu(this.dg, that.dg) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dg);
});
$p.e = (function(v1) {
  return this.fR((v1 | 0));
});
$p.t = (function(i) {
  return this.fR(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.cC = (function() {
  return this.dg;
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bQ)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  bQ: 1,
  X: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  a1: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.e3 = null;
  this.e3 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.m = (function() {
  return this.e3.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n9(this.e3, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.e3.a.length === that.e3.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.e3);
});
$p.fW = (function(i) {
});
$p.e = (function(v1) {
  this.fW((v1 | 0));
});
$p.t = (function(i) {
  this.fW(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.cC = (function() {
  return this.e3;
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bR)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  bR: 1,
  X: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  a1: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.d() ? 0 : 1);
    } else if (xs.d()) {
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
      var aEmpty = a.d();
      var bEmpty = b.d();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().p(a.u(), b.u()))) {
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
$p.cx = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.j = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.bl = (function() {
  return "LinearSeq";
});
$p.jm = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.t = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.eX = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.dQ = (function() {
  return $m_sci_List$();
});
$p.mN = (function(prefix) {
  if (this.d()) {
    return prefix;
  } else if (prefix.d()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.u(), this);
    var curr = result;
    var that = prefix.x();
    while ((!that.d())) {
      var temp = new $c_sci_$colon$colon(that.u(), this);
      curr.aM = temp;
      curr = temp;
      that = that.x();
    }
    return result;
  }
});
$p.d = (function() {
  return (this === $m_sci_Nil$());
});
$p.cd = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.mN(prefix);
  }
  if ((prefix.y() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.d()) {
      return prefix.oj();
    }
  }
  var iter = prefix.j();
  if (iter.l()) {
    var result = new $c_sci_$colon$colon(iter.h(), this);
    var curr = result;
    while (iter.l()) {
      var temp = new $c_sci_$colon$colon(iter.h(), this);
      curr.aM = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.mW = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.mN(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.az = (function(f) {
  var these = this;
  while ((!these.d())) {
    f.e(these.u());
    these = these.x();
  }
});
$p.m = (function() {
  var these = this;
  var len = 0;
  while ((!these.d())) {
    len = ((1 + len) | 0);
    these = these.x();
  }
  return len;
});
$p.bd = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$p.ca = (function(elem) {
  var these = this;
  while ((!these.d())) {
    if ($m_sr_BoxesRunTime$().p(these.u(), elem)) {
      return true;
    }
    these = these.x();
  }
  return false;
});
$p.bU = (function() {
  return "List";
});
$p.k = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.e = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.bV = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.nm = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.bq = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
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
  this.du = null;
  this.du = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.m = (function() {
  return this.du.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.na(this.du, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().nv(this.du, that.du) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.du);
});
$p.fX = (function(index) {
  return this.du.a[index];
});
$p.e = (function(v1) {
  return this.fX((v1 | 0));
});
$p.t = (function(i) {
  return this.fX(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.c9 = (function() {
  return this.du;
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ca)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  ca: 1,
  Y: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.dv = null;
  this.dv = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.m = (function() {
  return this.dv.a.length;
});
$p.fP = (function(index) {
  return this.dv.a[index];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n2(this.dv, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().np(this.dv, that.dv) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.dv);
});
$p.e = (function(v1) {
  return this.fP((v1 | 0));
});
$p.t = (function(i) {
  return this.fP(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.c9 = (function() {
  return this.dv;
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cb: 1,
  Y: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.bT = null;
  this.bT = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.m = (function() {
  return this.bT.a.length;
});
$p.fQ = (function(index) {
  return this.bT.a[index];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n3(this.bT, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().nq(this.bT, that.bT) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.bT);
});
$p.dI = (function(sb, start, sep, end) {
  var jsb = sb.b9;
  if ((start.length !== 0)) {
    jsb.n = (("" + jsb.n) + start);
  }
  var len = this.bT.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.mU(this.bT);
    } else {
      jsb.m();
      var c = this.bT.a[0];
      var str = ("" + $cToS(c));
      jsb.n = (jsb.n + str);
      var i = 1;
      while ((i < len)) {
        jsb.n = (("" + jsb.n) + sep);
        var c$1 = this.bT.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.n = (jsb.n + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.n = (("" + jsb.n) + end);
  }
  return sb;
});
$p.e = (function(v1) {
  return $bC(this.fQ((v1 | 0)));
});
$p.t = (function(i) {
  return $bC(this.fQ(i));
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.c9 = (function() {
  return this.bT;
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  cc: 1,
  Y: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.dw = null;
  this.dw = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.m = (function() {
  return this.dw.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n4(this.dw, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofDouble) ? $m_ju_Arrays$().nr(this.dw, that.dw) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.dw);
});
$p.fS = (function(index) {
  return this.dw.a[index];
});
$p.e = (function(v1) {
  return this.fS((v1 | 0));
});
$p.t = (function(i) {
  return this.fS(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.c9 = (function() {
  return this.dw;
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cd)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cd: 1,
  Y: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.dx = null;
  this.dx = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.m = (function() {
  return this.dx.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n5(this.dx, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofFloat) ? $m_ju_Arrays$().ns(this.dx, that.dx) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.dx);
});
$p.fT = (function(index) {
  return this.dx.a[index];
});
$p.e = (function(v1) {
  return this.fT((v1 | 0));
});
$p.t = (function(i) {
  return this.fT(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.c9 = (function() {
  return this.dx;
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ce)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  ce: 1,
  Y: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.dy = null;
  this.dy = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.m = (function() {
  return this.dy.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n6(this.dy, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().j4(this.dy, that.dy) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.dy);
});
$p.fU = (function(index) {
  return this.dy.a[index];
});
$p.e = (function(v1) {
  return this.fU((v1 | 0));
});
$p.t = (function(i) {
  return this.fU(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.c9 = (function() {
  return this.dy;
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  cf: 1,
  Y: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.dz = null;
  this.dz = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.m = (function() {
  return this.dz.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n7(this.dz, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().nt(this.dz, that.dz) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.dz);
});
$p.fV = (function(index) {
  return this.dz.a[index];
});
$p.e = (function(v1) {
  return this.fV((v1 | 0));
});
$p.t = (function(i) {
  return this.fV(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.c9 = (function() {
  return this.dz;
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  cg: 1,
  Y: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.cR = null;
  this.cR = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.ay = (function() {
  return $m_s_reflect_ClassTag$().mY($objectGetClass(this.cR).a2.Q());
});
$p.m = (function() {
  return this.cR.a.length;
});
$p.t = (function(index) {
  return this.cR.a[index];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n1(this.cR, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().nw(this.cR, that.cR) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.j = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.cR);
});
$p.e = (function(v1) {
  return this.t((v1 | 0));
});
$p.c9 = (function() {
  return this.cR;
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  ch: 1,
  Y: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.dA = null;
  this.dA = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.m = (function() {
  return this.dA.a.length;
});
$p.fR = (function(index) {
  return this.dA.a[index];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n8(this.dA, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().nu(this.dA, that.dA) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.dA);
});
$p.e = (function(v1) {
  return this.fR((v1 | 0));
});
$p.t = (function(i) {
  return this.fR(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.c9 = (function() {
  return this.dA;
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  ci: 1,
  Y: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.ea = null;
  this.ea = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.m = (function() {
  return this.ea.a.length;
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.n9(this.ea, this$1.aG);
});
$p.k = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.ea.a.length === that.ea.a.length) : $c_scm_ArraySeq.prototype.k.call(this, that));
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.ea);
});
$p.fW = (function(index) {
});
$p.e = (function(v1) {
  this.fW((v1 | 0));
});
$p.t = (function(i) {
  this.fW(i);
});
$p.ay = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.c9 = (function() {
  return this.ea;
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cj)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cj: 1,
  Y: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  s: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gU)));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.c = suffix1;
  $thiz.f = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.b = null;
  this.c = null;
  this.f = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
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
    throw this.aR(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.b.a.length))) {
    var a1 = this.b;
    var a1c = a1.i();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aR(index);
  }
});
$p.bk = (function(elem) {
  if ((this.b.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().eP(this.b, elem));
  } else {
    var $x_2 = this.b;
    var $x_1 = $m_sci_VectorStatics$().ad;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.el = (function(elem) {
  var len1 = this.b.a.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().eQ(elem, this.b));
  } else {
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2(a, 1, $m_sci_VectorStatics$().ad, this.b, ((1 + len1) | 0));
  }
});
$p.eh = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().cc(this.b, f));
});
$p.co = (function() {
  return 1;
});
$p.cD = (function(idx) {
  return this.b;
});
$p.bH = (function(suffix, k) {
  var data1b = $m_sci_VectorStatics$().eN(this.b, suffix);
  return ((data1b !== null) ? new $c_sci_Vector1(data1b) : $c_sci_Vector.prototype.bH.call(this, suffix, k));
});
$p.dJ = (function(elem) {
  return this.bk(elem);
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.b.a.length))) {
    return this.b.a[index];
  } else {
    throw this.aR(index);
  }
});
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c3)));
}
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  c3: 1,
  ae: 1,
  a8: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.io = null;
  this.aM = null;
  this.io = head;
  this.aM = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.u = (function() {
  return this.io;
});
$p.aY = (function() {
  return "::";
});
$p.aW = (function() {
  return 2;
});
$p.aX = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.io;
      break;
    }
    case 1: {
      return this.aM;
      break;
    }
    default: {
      return $m_sr_Statics$().dP(x$1);
    }
  }
});
$p.be = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return this.aM;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  g0: 1,
  aQ: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  aO: 1,
  ao: 1,
  aK: 1,
  aP: 1,
  bH: 1,
  s: 1,
  l: 1,
  z: 1,
  U: 1,
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
$p.ji = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.rn = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.y = (function() {
  return 0;
});
$p.j = (function() {
  return $m_sc_Iterator$().G;
});
$p.aY = (function() {
  return "Nil";
});
$p.aW = (function() {
  return 0;
});
$p.aX = (function(x$1) {
  return $m_sr_Statics$().dP(x$1);
});
$p.be = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  this.rn();
});
$p.u = (function() {
  this.ji();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  gv: 1,
  aQ: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  aO: 1,
  ao: 1,
  aK: 1,
  aP: 1,
  bH: 1,
  s: 1,
  l: 1,
  z: 1,
  U: 1,
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
  this.c = null;
  this.f = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().iB, $m_sci_VectorStatics$().iB, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.mX = (function(index) {
  throw this.aR(index);
});
$p.dR = (function(index, elem) {
  throw this.aR(index);
});
$p.bk = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.el = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.eh = (function(f) {
  return this;
});
$p.co = (function() {
  return 0;
});
$p.cD = (function(idx) {
  return null;
});
$p.k = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$p.bH = (function(suffix, k) {
  return $m_sci_Vector$().bc(suffix);
});
$p.aR = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.dJ = (function(elem) {
  return this.bk(elem);
});
$p.e = (function(v1) {
  this.mX((v1 | 0));
});
$p.t = (function(i) {
  this.mX(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  gF: 1,
  ad: 1,
  ae: 1,
  a8: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  U: 1,
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
  this.c = null;
  this.f = 0;
  this.b5 = 0;
  this.aP = null;
  this.b5 = len1;
  this.aP = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.b5) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.aP.a.length) ? this.aP.a[i2].a[i1] : this.c.a[(31 & io)]);
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.aR(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.f))) {
    if ((index >= this.b5)) {
      var io = ((index - this.b5) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.aP.a.length)) {
        var a2 = this.aP;
        var a2c = a2.i();
        var a1 = a2c.a[i2];
        var a1c = a1.i();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.b, this.b5, a2c, this.c, this.f);
      } else {
        var a1$1 = this.c;
        var a1c$1 = a1$1.i();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.b, this.b5, this.aP, a1c$1, this.f);
      }
    } else {
      var a1$2 = this.b;
      var a1c$2 = a1$2.i();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.b5, this.aP, this.c, this.f);
    }
  } else {
    throw this.aR(index);
  }
});
$p.bk = (function(elem) {
  if ((this.c.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eP(this.c, elem);
    var x$2 = ((1 + this.f) | 0);
    return new $c_sci_Vector2(this.b, this.b5, this.aP, x$1, x$2);
  } else if ((this.aP.a.length < 30)) {
    var x$6 = $m_sci_VectorStatics$().F(this.aP, this.c);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = ((1 + this.f) | 0);
    return new $c_sci_Vector2(this.b, this.b5, x$6, a, x$8);
  } else {
    var $x_5 = this.b;
    var $x_4 = this.b5;
    var $x_3 = this.aP;
    var $x_2 = this.b5;
    var $x_1 = $m_sci_VectorStatics$().b6;
    var x = this.c;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.f) | 0));
  }
});
$p.el = (function(elem) {
  if ((this.b5 < 32)) {
    var x$1 = $m_sci_VectorStatics$().eQ(elem, this.b);
    var x$2 = ((1 + this.b5) | 0);
    var x$3 = ((1 + this.f) | 0);
    return new $c_sci_Vector2(x$1, x$2, this.aP, this.c, x$3);
  } else if ((this.aP.a.length < 30)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$8 = $m_sci_VectorStatics$().B(this.b, this.aP);
    var x$9 = ((1 + this.f) | 0);
    return new $c_sci_Vector2(a, 1, x$8, this.c, x$9);
  } else {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x = this.b;
    var a$2 = new ($d_O.r().r().C)(1);
    a$2.a[0] = x;
    return new $c_sci_Vector3(a$1, 1, a$2, ((1 + this.b5) | 0), $m_sci_VectorStatics$().b6, this.aP, this.c, ((1 + this.f) | 0));
  }
});
$p.eh = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cc(this.b, f);
  var x$2 = $m_sci_VectorStatics$().ar(2, this.aP, f);
  var x$3 = $m_sci_VectorStatics$().cc(this.c, f);
  return new $c_sci_Vector2(x$1, this.b5, x$2, x$3, this.f);
});
$p.co = (function() {
  return 3;
});
$p.cD = (function(idx) {
  switch (idx) {
    case 0: {
      return this.b;
      break;
    }
    case 1: {
      return this.aP;
      break;
    }
    case 2: {
      return this.c;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.bH = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().eN(this.c, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.f - this.c.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector2(this.b, this.b5, this.aP, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.bH.call(this, suffix, k);
  }
});
$p.dJ = (function(elem) {
  return this.bk(elem);
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.b5) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.aP.a.length) ? this.aP.a[i2].a[i1] : this.c.a[(31 & io)]);
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.aR(index);
  }
});
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  c4: 1,
  ad: 1,
  ae: 1,
  a8: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.b = null;
  this.c = null;
  this.f = 0;
  this.aS = 0;
  this.aT = null;
  this.aI = 0;
  this.aw = null;
  this.aB = null;
  this.aS = len1;
  this.aT = prefix2;
  this.aI = len12;
  this.aw = data3;
  this.aB = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.aI) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aw.a.length) ? this.aw.a[i3].a[i2].a[i1] : ((i2 < this.aB.a.length) ? this.aB.a[i2].a[i1] : this.c.a[i1]));
    } else if ((index >= this.aS)) {
      var io$2 = ((index - this.aS) | 0);
      return this.aT.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.aR(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.f))) {
    if ((index >= this.aI)) {
      var io = ((index - this.aI) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aw.a.length)) {
        var a3 = this.aw;
        var a3c = a3.i();
        var a2 = a3c.a[i3];
        var a2c = a2.i();
        var a1 = a2c.a[i2];
        var a1c = a1.i();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.b, this.aS, this.aT, this.aI, a3c, this.aB, this.c, this.f);
      } else if ((i2 < this.aB.a.length)) {
        var a2$1 = this.aB;
        var a2c$1 = a2$1.i();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.i();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.b, this.aS, this.aT, this.aI, this.aw, a2c$1, this.c, this.f);
      } else {
        var a1$2 = this.c;
        var a1c$2 = a1$2.i();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.b, this.aS, this.aT, this.aI, this.aw, this.aB, a1c$2, this.f);
      }
    } else if ((index >= this.aS)) {
      var io$2 = ((index - this.aS) | 0);
      var a2$2 = this.aT;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.i();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.i();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.b, this.aS, a2c$2, this.aI, this.aw, this.aB, this.c, this.f);
    } else {
      var a1$4 = this.b;
      var a1c$4 = a1$4.i();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.aS, this.aT, this.aI, this.aw, this.aB, this.c, this.f);
    }
  } else {
    throw this.aR(index);
  }
});
$p.bk = (function(elem) {
  if ((this.c.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eP(this.c, elem);
    var x$2 = ((1 + this.f) | 0);
    return new $c_sci_Vector3(this.b, this.aS, this.aT, this.aI, this.aw, this.aB, x$1, x$2);
  } else if ((this.aB.a.length < 31)) {
    var x$9 = $m_sci_VectorStatics$().F(this.aB, this.c);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = ((1 + this.f) | 0);
    return new $c_sci_Vector3(this.b, this.aS, this.aT, this.aI, this.aw, x$9, a, x$11);
  } else if ((this.aw.a.length < 30)) {
    var x$17 = $m_sci_VectorStatics$().F(this.aw, $m_sci_VectorStatics$().F(this.aB, this.c));
    var x$18 = $m_sci_VectorStatics$().ad;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$20 = ((1 + this.f) | 0);
    return new $c_sci_Vector3(this.b, this.aS, this.aT, this.aI, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.b;
    var $x_7 = this.aS;
    var $x_6 = this.aT;
    var $x_5 = this.aI;
    var $x_4 = this.aw;
    var $x_3 = this.aI;
    var $x_2 = $m_sci_VectorStatics$().ci;
    var x = $m_sci_VectorStatics$().F(this.aB, this.c);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().ad;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.f) | 0));
  }
});
$p.el = (function(elem) {
  if ((this.aS < 32)) {
    var x$1 = $m_sci_VectorStatics$().eQ(elem, this.b);
    var x$2 = ((1 + this.aS) | 0);
    var x$3 = ((1 + this.aI) | 0);
    var x$4 = ((1 + this.f) | 0);
    return new $c_sci_Vector3(x$1, x$2, this.aT, x$3, this.aw, this.aB, this.c, x$4);
  } else if ((this.aI < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$11 = $m_sci_VectorStatics$().B(this.b, this.aT);
    var x$12 = ((1 + this.aI) | 0);
    var x$13 = ((1 + this.f) | 0);
    return new $c_sci_Vector3(a, 1, x$11, x$12, this.aw, this.aB, this.c, x$13);
  } else if ((this.aw.a.length < 30)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$19 = $m_sci_VectorStatics$().ad;
    var x$21 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.aT), this.aw);
    var x$22 = ((1 + this.f) | 0);
    return new $c_sci_Vector3(a$1, 1, x$19, 1, x$21, this.aB, this.c, x$22);
  } else {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var $x_1 = $m_sci_VectorStatics$().ad;
    var x = $m_sci_VectorStatics$().B(this.b, this.aT);
    var a$3 = new ($d_O.r().r().r().C)(1);
    a$3.a[0] = x;
    return new $c_sci_Vector4(a$2, 1, $x_1, 1, a$3, ((1 + this.aI) | 0), $m_sci_VectorStatics$().ci, this.aw, this.aB, this.c, ((1 + this.f) | 0));
  }
});
$p.eh = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cc(this.b, f);
  var x$2 = $m_sci_VectorStatics$().ar(2, this.aT, f);
  var x$3 = $m_sci_VectorStatics$().ar(3, this.aw, f);
  var x$4 = $m_sci_VectorStatics$().ar(2, this.aB, f);
  var x$5 = $m_sci_VectorStatics$().cc(this.c, f);
  return new $c_sci_Vector3(x$1, this.aS, x$2, this.aI, x$3, x$4, x$5, this.f);
});
$p.co = (function() {
  return 5;
});
$p.cD = (function(idx) {
  switch (idx) {
    case 0: {
      return this.b;
      break;
    }
    case 1: {
      return this.aT;
      break;
    }
    case 2: {
      return this.aw;
      break;
    }
    case 3: {
      return this.aB;
      break;
    }
    case 4: {
      return this.c;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.bH = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().eN(this.c, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.f - this.c.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector3(this.b, this.aS, this.aT, this.aI, this.aw, this.aB, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.bH.call(this, suffix, k);
  }
});
$p.dJ = (function(elem) {
  return this.bk(elem);
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.aI) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aw.a.length) ? this.aw.a[i3].a[i2].a[i1] : ((i2 < this.aB.a.length) ? this.aB.a[i2].a[i1] : this.c.a[i1]));
    } else if ((index >= this.aS)) {
      var io$2 = ((index - this.aS) | 0);
      return this.aT.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.aR(index);
  }
});
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  c5: 1,
  ad: 1,
  ae: 1,
  a8: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.b = null;
  this.c = null;
  this.f = 0;
  this.aJ = 0;
  this.aD = null;
  this.aC = 0;
  this.aE = null;
  this.ap = 0;
  this.ab = null;
  this.ah = null;
  this.ag = null;
  this.aJ = len1;
  this.aD = prefix2;
  this.aC = len12;
  this.aE = prefix3;
  this.ap = len123;
  this.ab = data4;
  this.ah = suffix3;
  this.ag = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.ap) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ab.a.length) ? this.ab.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ah.a.length) ? this.ah.a[i3].a[i2].a[i1] : ((i2 < this.ag.a.length) ? this.ag.a[i2].a[i1] : this.c.a[i1])));
    } else if ((index >= this.aC)) {
      var io$2 = ((index - this.aC) | 0);
      return this.aE.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aJ)) {
      var io$3 = ((index - this.aJ) | 0);
      return this.aD.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.aR(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.f))) {
    if ((index >= this.ap)) {
      var io = ((index - this.ap) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.ab.a.length)) {
        var a4 = this.ab;
        var a4c = a4.i();
        var a3 = a4c.a[i4];
        var a3c = a3.i();
        var a2 = a3c.a[i3];
        var a2c = a2.i();
        var a1 = a2c.a[i2];
        var a1c = a1.i();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        return new $c_sci_Vector4(this.b, this.aJ, this.aD, this.aC, this.aE, this.ap, a4c, this.ah, this.ag, this.c, this.f);
      } else if ((i3 < this.ah.a.length)) {
        var a3$1 = this.ah;
        var a3c$1 = a3$1.i();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.i();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.i();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.b, this.aJ, this.aD, this.aC, this.aE, this.ap, this.ab, a3c$1, this.ag, this.c, this.f);
      } else if ((i2 < this.ag.a.length)) {
        var a2$2 = this.ag;
        var a2c$2 = a2$2.i();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.i();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.b, this.aJ, this.aD, this.aC, this.aE, this.ap, this.ab, this.ah, a2c$2, this.c, this.f);
      } else {
        var a1$3 = this.c;
        var a1c$3 = a1$3.i();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.b, this.aJ, this.aD, this.aC, this.aE, this.ap, this.ab, this.ah, this.ag, a1c$3, this.f);
      }
    } else if ((index >= this.aC)) {
      var io$2 = ((index - this.aC) | 0);
      var a3$2 = this.aE;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.i();
      var a2$3 = a3c$2.a[idx3];
      var a2c$3 = a2$3.i();
      var a1$4 = a2c$3.a[idx2];
      var a1c$4 = a1$4.i();
      a1c$4.a[idx1] = elem;
      a2c$3.a[idx2] = a1c$4;
      a3c$2.a[idx3] = a2c$3;
      return new $c_sci_Vector4(this.b, this.aJ, this.aD, this.aC, a3c$2, this.ap, this.ab, this.ah, this.ag, this.c, this.f);
    } else if ((index >= this.aJ)) {
      var io$3 = ((index - this.aJ) | 0);
      var a2$4 = this.aD;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.i();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.i();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.b, this.aJ, a2c$4, this.aC, this.aE, this.ap, this.ab, this.ah, this.ag, this.c, this.f);
    } else {
      var a1$6 = this.b;
      var a1c$6 = a1$6.i();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.aJ, this.aD, this.aC, this.aE, this.ap, this.ab, this.ah, this.ag, this.c, this.f);
    }
  } else {
    throw this.aR(index);
  }
});
$p.bk = (function(elem) {
  if ((this.c.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eP(this.c, elem);
    var x$2 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(this.b, this.aJ, this.aD, this.aC, this.aE, this.ap, this.ab, this.ah, this.ag, x$1, x$2);
  } else if ((this.ag.a.length < 31)) {
    var x$12 = $m_sci_VectorStatics$().F(this.ag, this.c);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(this.b, this.aJ, this.aD, this.aC, this.aE, this.ap, this.ab, this.ah, x$12, a, x$14);
  } else if ((this.ah.a.length < 31)) {
    var x$23 = $m_sci_VectorStatics$().F(this.ah, $m_sci_VectorStatics$().F(this.ag, this.c));
    var x$24 = $m_sci_VectorStatics$().ad;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$26 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(this.b, this.aJ, this.aD, this.aC, this.aE, this.ap, this.ab, x$23, x$24, a$1, x$26);
  } else if ((this.ab.a.length < 30)) {
    var x$34 = $m_sci_VectorStatics$().F(this.ab, $m_sci_VectorStatics$().F(this.ah, $m_sci_VectorStatics$().F(this.ag, this.c)));
    var x$35 = $m_sci_VectorStatics$().b6;
    var x$36 = $m_sci_VectorStatics$().ad;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$38 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(this.b, this.aJ, this.aD, this.aC, this.aE, this.ap, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.b;
    var $x_10 = this.aJ;
    var $x_9 = this.aD;
    var $x_8 = this.aC;
    var $x_7 = this.aE;
    var $x_6 = this.ap;
    var $x_5 = this.ab;
    var $x_4 = this.ap;
    var $x_3 = $m_sci_VectorStatics$().fH;
    var x = $m_sci_VectorStatics$().F(this.ah, $m_sci_VectorStatics$().F(this.ag, this.c));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().b6;
    var $x_1 = $m_sci_VectorStatics$().ad;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.f) | 0));
  }
});
$p.el = (function(elem) {
  if ((this.aJ < 32)) {
    var x$1 = $m_sci_VectorStatics$().eQ(elem, this.b);
    var x$2 = ((1 + this.aJ) | 0);
    var x$3 = ((1 + this.aC) | 0);
    var x$4 = ((1 + this.ap) | 0);
    var x$5 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(x$1, x$2, this.aD, x$3, this.aE, x$4, this.ab, this.ah, this.ag, this.c, x$5);
  } else if ((this.aC < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$14 = $m_sci_VectorStatics$().B(this.b, this.aD);
    var x$15 = ((1 + this.aC) | 0);
    var x$16 = ((1 + this.ap) | 0);
    var x$17 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(a, 1, x$14, x$15, this.aE, x$16, this.ab, this.ah, this.ag, this.c, x$17);
  } else if ((this.ap < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$25 = $m_sci_VectorStatics$().ad;
    var x$27 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.aD), this.aE);
    var x$28 = ((1 + this.ap) | 0);
    var x$29 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(a$1, 1, x$25, 1, x$27, x$28, this.ab, this.ah, this.ag, this.c, x$29);
  } else if ((this.ab.a.length < 30)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$36 = $m_sci_VectorStatics$().ad;
    var x$38 = $m_sci_VectorStatics$().b6;
    var x$40 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.aD), this.aE), this.ab);
    var x$41 = ((1 + this.f) | 0);
    return new $c_sci_Vector4(a$2, 1, x$36, 1, x$38, 1, x$40, this.ah, this.ag, this.c, x$41);
  } else {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var $x_2 = $m_sci_VectorStatics$().ad;
    var $x_1 = $m_sci_VectorStatics$().b6;
    var x = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.aD), this.aE);
    var a$4 = new ($d_O.r().r().r().r().C)(1);
    a$4.a[0] = x;
    return new $c_sci_Vector5(a$3, 1, $x_2, 1, $x_1, 1, a$4, ((1 + this.ap) | 0), $m_sci_VectorStatics$().fH, this.ab, this.ah, this.ag, this.c, ((1 + this.f) | 0));
  }
});
$p.eh = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cc(this.b, f);
  var x$2 = $m_sci_VectorStatics$().ar(2, this.aD, f);
  var x$3 = $m_sci_VectorStatics$().ar(3, this.aE, f);
  var x$4 = $m_sci_VectorStatics$().ar(4, this.ab, f);
  var x$5 = $m_sci_VectorStatics$().ar(3, this.ah, f);
  var x$6 = $m_sci_VectorStatics$().ar(2, this.ag, f);
  var x$7 = $m_sci_VectorStatics$().cc(this.c, f);
  return new $c_sci_Vector4(x$1, this.aJ, x$2, this.aC, x$3, this.ap, x$4, x$5, x$6, x$7, this.f);
});
$p.co = (function() {
  return 7;
});
$p.cD = (function(idx) {
  switch (idx) {
    case 0: {
      return this.b;
      break;
    }
    case 1: {
      return this.aD;
      break;
    }
    case 2: {
      return this.aE;
      break;
    }
    case 3: {
      return this.ab;
      break;
    }
    case 4: {
      return this.ah;
      break;
    }
    case 5: {
      return this.ag;
      break;
    }
    case 6: {
      return this.c;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.bH = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().eN(this.c, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.f - this.c.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector4(this.b, this.aJ, this.aD, this.aC, this.aE, this.ap, this.ab, this.ah, this.ag, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.bH.call(this, suffix, k);
  }
});
$p.dJ = (function(elem) {
  return this.bk(elem);
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.ap) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ab.a.length) ? this.ab.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ah.a.length) ? this.ah.a[i3].a[i2].a[i1] : ((i2 < this.ag.a.length) ? this.ag.a[i2].a[i1] : this.c.a[i1])));
    } else if ((index >= this.aC)) {
      var io$2 = ((index - this.aC) | 0);
      return this.aE.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aJ)) {
      var io$3 = ((index - this.aJ) | 0);
      return this.aD.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.aR(index);
  }
});
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c6)));
}
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  c6: 1,
  ad: 1,
  ae: 1,
  a8: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.b = null;
  this.c = null;
  this.f = 0;
  this.as = 0;
  this.aj = null;
  this.aq = 0;
  this.ak = null;
  this.ai = 0;
  this.al = null;
  this.a0 = 0;
  this.U = null;
  this.X = null;
  this.W = null;
  this.V = null;
  this.as = len1;
  this.aj = prefix2;
  this.aq = len12;
  this.ak = prefix3;
  this.ai = len123;
  this.al = prefix4;
  this.a0 = len1234;
  this.U = data5;
  this.X = suffix4;
  this.W = suffix3;
  this.V = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.a0) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.U.a.length) ? this.U.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.X.a.length) ? this.X.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.W.a.length) ? this.W.a[i3].a[i2].a[i1] : ((i2 < this.V.a.length) ? this.V.a[i2].a[i1] : this.c.a[i1]))));
    } else if ((index >= this.ai)) {
      var io$2 = ((index - this.ai) | 0);
      return this.al.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aq)) {
      var io$3 = ((index - this.aq) | 0);
      return this.ak.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.as)) {
      var io$4 = ((index - this.as) | 0);
      return this.aj.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.aR(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.f))) {
    if ((index >= this.a0)) {
      var io = ((index - this.a0) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.U.a.length)) {
        var a5 = this.U;
        var a5c = a5.i();
        var a4 = a5c.a[i5];
        var a4c = a4.i();
        var a3 = a4c.a[i4];
        var a3c = a3.i();
        var a2 = a3c.a[i3];
        var a2c = a2.i();
        var a1 = a2c.a[i2];
        var a1c = a1.i();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, a5c, this.X, this.W, this.V, this.c, this.f);
      } else if ((i4 < this.X.a.length)) {
        var a4$1 = this.X;
        var a4c$1 = a4$1.i();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.i();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.i();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.i();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, this.U, a4c$1, this.W, this.V, this.c, this.f);
      } else if ((i3 < this.W.a.length)) {
        var a3$2 = this.W;
        var a3c$2 = a3$2.i();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.i();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.i();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, this.U, this.X, a3c$2, this.V, this.c, this.f);
      } else if ((i2 < this.V.a.length)) {
        var a2$3 = this.V;
        var a2c$3 = a2$3.i();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.i();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, this.U, this.X, this.W, a2c$3, this.c, this.f);
      } else {
        var a1$4 = this.c;
        var a1c$4 = a1$4.i();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, this.U, this.X, this.W, this.V, a1c$4, this.f);
      }
    } else if ((index >= this.ai)) {
      var io$2 = ((index - this.ai) | 0);
      var a4$2 = this.al;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.i();
      var a3$3 = a4c$2.a[idx4];
      var a3c$3 = a3$3.i();
      var a2$4 = a3c$3.a[idx3];
      var a2c$4 = a2$4.i();
      var a1$5 = a2c$4.a[idx2];
      var a1c$5 = a1$5.i();
      a1c$5.a[idx1] = elem;
      a2c$4.a[idx2] = a1c$5;
      a3c$3.a[idx3] = a2c$4;
      a4c$2.a[idx4] = a3c$3;
      return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, a4c$2, this.a0, this.U, this.X, this.W, this.V, this.c, this.f);
    } else if ((index >= this.aq)) {
      var io$3 = ((index - this.aq) | 0);
      var a3$4 = this.ak;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.i();
      var a2$5 = a3c$4.a[idx3$1];
      var a2c$5 = a2$5.i();
      var a1$6 = a2c$5.a[idx2$1];
      var a1c$6 = a1$6.i();
      a1c$6.a[idx1$1] = elem;
      a2c$5.a[idx2$1] = a1c$6;
      a3c$4.a[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, a3c$4, this.ai, this.al, this.a0, this.U, this.X, this.W, this.V, this.c, this.f);
    } else if ((index >= this.as)) {
      var io$4 = ((index - this.as) | 0);
      var a2$6 = this.aj;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.i();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.i();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.b, this.as, a2c$6, this.aq, this.ak, this.ai, this.al, this.a0, this.U, this.X, this.W, this.V, this.c, this.f);
    } else {
      var a1$8 = this.b;
      var a1c$8 = a1$8.i();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, this.U, this.X, this.W, this.V, this.c, this.f);
    }
  } else {
    throw this.aR(index);
  }
});
$p.bk = (function(elem) {
  if ((this.c.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eP(this.c, elem);
    var x$2 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, this.U, this.X, this.W, this.V, x$1, x$2);
  } else if ((this.V.a.length < 31)) {
    var x$15 = $m_sci_VectorStatics$().F(this.V, this.c);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, this.U, this.X, this.W, x$15, a, x$17);
  } else if ((this.W.a.length < 31)) {
    var x$29 = $m_sci_VectorStatics$().F(this.W, $m_sci_VectorStatics$().F(this.V, this.c));
    var x$30 = $m_sci_VectorStatics$().ad;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$32 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, this.U, this.X, x$29, x$30, a$1, x$32);
  } else if ((this.X.a.length < 31)) {
    var x$43 = $m_sci_VectorStatics$().F(this.X, $m_sci_VectorStatics$().F(this.W, $m_sci_VectorStatics$().F(this.V, this.c)));
    var x$44 = $m_sci_VectorStatics$().b6;
    var x$45 = $m_sci_VectorStatics$().ad;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$47 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, this.U, x$43, x$44, x$45, a$2, x$47);
  } else if ((this.U.a.length < 30)) {
    var x$57 = $m_sci_VectorStatics$().F(this.U, $m_sci_VectorStatics$().F(this.X, $m_sci_VectorStatics$().F(this.W, $m_sci_VectorStatics$().F(this.V, this.c))));
    var x$58 = $m_sci_VectorStatics$().ci;
    var x$59 = $m_sci_VectorStatics$().b6;
    var x$60 = $m_sci_VectorStatics$().ad;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$62 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.b;
    var $x_13 = this.as;
    var $x_12 = this.aj;
    var $x_11 = this.aq;
    var $x_10 = this.ak;
    var $x_9 = this.ai;
    var $x_8 = this.al;
    var $x_7 = this.a0;
    var $x_6 = this.U;
    var $x_5 = this.a0;
    var $x_4 = $m_sci_VectorStatics$().iC;
    var x = $m_sci_VectorStatics$().F(this.X, $m_sci_VectorStatics$().F(this.W, $m_sci_VectorStatics$().F(this.V, this.c)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().ci;
    var $x_2 = $m_sci_VectorStatics$().b6;
    var $x_1 = $m_sci_VectorStatics$().ad;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.f) | 0));
  }
});
$p.el = (function(elem) {
  if ((this.as < 32)) {
    var x$1 = $m_sci_VectorStatics$().eQ(elem, this.b);
    var x$2 = ((1 + this.as) | 0);
    var x$3 = ((1 + this.aq) | 0);
    var x$4 = ((1 + this.ai) | 0);
    var x$5 = ((1 + this.a0) | 0);
    var x$6 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(x$1, x$2, this.aj, x$3, this.ak, x$4, this.al, x$5, this.U, this.X, this.W, this.V, this.c, x$6);
  } else if ((this.aq < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$17 = $m_sci_VectorStatics$().B(this.b, this.aj);
    var x$18 = ((1 + this.aq) | 0);
    var x$19 = ((1 + this.ai) | 0);
    var x$20 = ((1 + this.a0) | 0);
    var x$21 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(a, 1, x$17, x$18, this.ak, x$19, this.al, x$20, this.U, this.X, this.W, this.V, this.c, x$21);
  } else if ((this.ai < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$31 = $m_sci_VectorStatics$().ad;
    var x$33 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.aj), this.ak);
    var x$34 = ((1 + this.ai) | 0);
    var x$35 = ((1 + this.a0) | 0);
    var x$36 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(a$1, 1, x$31, 1, x$33, x$34, this.al, x$35, this.U, this.X, this.W, this.V, this.c, x$36);
  } else if ((this.a0 < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$45 = $m_sci_VectorStatics$().ad;
    var x$47 = $m_sci_VectorStatics$().b6;
    var x$49 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.aj), this.ak), this.al);
    var x$50 = ((1 + this.a0) | 0);
    var x$51 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(a$2, 1, x$45, 1, x$47, 1, x$49, x$50, this.U, this.X, this.W, this.V, this.c, x$51);
  } else if ((this.U.a.length < 30)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$59 = $m_sci_VectorStatics$().ad;
    var x$61 = $m_sci_VectorStatics$().b6;
    var x$63 = $m_sci_VectorStatics$().ci;
    var x$65 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.aj), this.ak), this.al), this.U);
    var x$66 = ((1 + this.f) | 0);
    return new $c_sci_Vector5(a$3, 1, x$59, 1, x$61, 1, x$63, 1, x$65, this.X, this.W, this.V, this.c, x$66);
  } else {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var $x_3 = $m_sci_VectorStatics$().ad;
    var $x_2 = $m_sci_VectorStatics$().b6;
    var $x_1 = $m_sci_VectorStatics$().ci;
    var x = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.aj), this.ak), this.al);
    var a$5 = new ($d_O.r().r().r().r().r().C)(1);
    a$5.a[0] = x;
    return new $c_sci_Vector6(a$4, 1, $x_3, 1, $x_2, 1, $x_1, 1, a$5, ((1 + this.a0) | 0), $m_sci_VectorStatics$().iC, this.U, this.X, this.W, this.V, this.c, ((1 + this.f) | 0));
  }
});
$p.eh = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cc(this.b, f);
  var x$2 = $m_sci_VectorStatics$().ar(2, this.aj, f);
  var x$3 = $m_sci_VectorStatics$().ar(3, this.ak, f);
  var x$4 = $m_sci_VectorStatics$().ar(4, this.al, f);
  var x$5 = $m_sci_VectorStatics$().ar(5, this.U, f);
  var x$6 = $m_sci_VectorStatics$().ar(4, this.X, f);
  var x$7 = $m_sci_VectorStatics$().ar(3, this.W, f);
  var x$8 = $m_sci_VectorStatics$().ar(2, this.V, f);
  var x$9 = $m_sci_VectorStatics$().cc(this.c, f);
  return new $c_sci_Vector5(x$1, this.as, x$2, this.aq, x$3, this.ai, x$4, this.a0, x$5, x$6, x$7, x$8, x$9, this.f);
});
$p.co = (function() {
  return 9;
});
$p.cD = (function(idx) {
  switch (idx) {
    case 0: {
      return this.b;
      break;
    }
    case 1: {
      return this.aj;
      break;
    }
    case 2: {
      return this.ak;
      break;
    }
    case 3: {
      return this.al;
      break;
    }
    case 4: {
      return this.U;
      break;
    }
    case 5: {
      return this.X;
      break;
    }
    case 6: {
      return this.W;
      break;
    }
    case 7: {
      return this.V;
      break;
    }
    case 8: {
      return this.c;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.bH = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().eN(this.c, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.f - this.c.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector5(this.b, this.as, this.aj, this.aq, this.ak, this.ai, this.al, this.a0, this.U, this.X, this.W, this.V, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.bH.call(this, suffix, k);
  }
});
$p.dJ = (function(elem) {
  return this.bk(elem);
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.a0) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.U.a.length) ? this.U.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.X.a.length) ? this.X.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.W.a.length) ? this.W.a[i3].a[i2].a[i1] : ((i2 < this.V.a.length) ? this.V.a[i2].a[i1] : this.c.a[i1]))));
    } else if ((index >= this.ai)) {
      var io$2 = ((index - this.ai) | 0);
      return this.al.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aq)) {
      var io$3 = ((index - this.aq) | 0);
      return this.ak.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.as)) {
      var io$4 = ((index - this.as) | 0);
      return this.aj.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.aR(index);
  }
});
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c7)));
}
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  c7: 1,
  ad: 1,
  ae: 1,
  a8: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.b = null;
  this.c = null;
  this.f = 0;
  this.am = 0;
  this.a4 = null;
  this.ac = 0;
  this.a5 = null;
  this.a3 = 0;
  this.a6 = null;
  this.a1 = 0;
  this.a7 = null;
  this.Y = 0;
  this.L = null;
  this.S = null;
  this.R = null;
  this.Q = null;
  this.P = null;
  this.am = len1;
  this.a4 = prefix2;
  this.ac = len12;
  this.a5 = prefix3;
  this.a3 = len123;
  this.a6 = prefix4;
  this.a1 = len1234;
  this.a7 = prefix5;
  this.Y = len12345;
  this.L = data6;
  this.S = suffix5;
  this.R = suffix4;
  this.Q = suffix3;
  this.P = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.t = (function(index) {
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.Y) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.L.a.length) ? this.L.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.S.a.length) ? this.S.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.R.a.length) ? this.R.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.Q.a.length) ? this.Q.a[i3].a[i2].a[i1] : ((i2 < this.P.a.length) ? this.P.a[i2].a[i1] : this.c.a[i1])))));
    } else if ((index >= this.a1)) {
      var io$2 = ((index - this.a1) | 0);
      return this.a7.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.a3)) {
      var io$3 = ((index - this.a3) | 0);
      return this.a6.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ac)) {
      var io$4 = ((index - this.ac) | 0);
      return this.a5.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.am)) {
      var io$5 = ((index - this.am) | 0);
      return this.a4.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.aR(index);
  }
});
$p.dR = (function(index, elem) {
  if (((index >= 0) && (index < this.f))) {
    if ((index >= this.Y)) {
      var io = ((index - this.Y) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.L.a.length)) {
        var a6 = this.L;
        var a6c = a6.i();
        var a5 = a6c.a[i6];
        var a5c = a5.i();
        var a4 = a5c.a[i5];
        var a4c = a4.i();
        var a3 = a4c.a[i4];
        var a3c = a3.i();
        var a2 = a3c.a[i3];
        var a2c = a2.i();
        var a1 = a2c.a[i2];
        var a1c = a1.i();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        a6c.a[i6] = a5c;
        return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, a6c, this.S, this.R, this.Q, this.P, this.c, this.f);
      } else if ((i5 < this.S.a.length)) {
        var a5$1 = this.S;
        var a5c$1 = a5$1.i();
        var a4$1 = a5c$1.a[i5];
        var a4c$1 = a4$1.i();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.i();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.i();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.i();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        a5c$1.a[i5] = a4c$1;
        return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, a5c$1, this.R, this.Q, this.P, this.c, this.f);
      } else if ((i4 < this.R.a.length)) {
        var a4$2 = this.R;
        var a4c$2 = a4$2.i();
        var a3$2 = a4c$2.a[i4];
        var a3c$2 = a3$2.i();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.i();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.i();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        a4c$2.a[i4] = a3c$2;
        return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, a4c$2, this.Q, this.P, this.c, this.f);
      } else if ((i3 < this.Q.a.length)) {
        var a3$3 = this.Q;
        var a3c$3 = a3$3.i();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.i();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.i();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, this.R, a3c$3, this.P, this.c, this.f);
      } else if ((i2 < this.P.a.length)) {
        var a2$4 = this.P;
        var a2c$4 = a2$4.i();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.i();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, this.R, this.Q, a2c$4, this.c, this.f);
      } else {
        var a1$5 = this.c;
        var a1c$5 = a1$5.i();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, this.R, this.Q, this.P, a1c$5, this.f);
      }
    } else if ((index >= this.a1)) {
      var io$2 = ((index - this.a1) | 0);
      var a5$2 = this.a7;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.i();
      var a4$3 = a5c$2.a[idx5];
      var a4c$3 = a4$3.i();
      var a3$4 = a4c$3.a[idx4];
      var a3c$4 = a3$4.i();
      var a2$5 = a3c$4.a[idx3];
      var a2c$5 = a2$5.i();
      var a1$6 = a2c$5.a[idx2];
      var a1c$6 = a1$6.i();
      a1c$6.a[idx1] = elem;
      a2c$5.a[idx2] = a1c$6;
      a3c$4.a[idx3] = a2c$5;
      a4c$3.a[idx4] = a3c$4;
      a5c$2.a[idx5] = a4c$3;
      return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, a5c$2, this.Y, this.L, this.S, this.R, this.Q, this.P, this.c, this.f);
    } else if ((index >= this.a3)) {
      var io$3 = ((index - this.a3) | 0);
      var a4$4 = this.a6;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.i();
      var a3$5 = a4c$4.a[idx4$1];
      var a3c$5 = a3$5.i();
      var a2$6 = a3c$5.a[idx3$1];
      var a2c$6 = a2$6.i();
      var a1$7 = a2c$6.a[idx2$1];
      var a1c$7 = a1$7.i();
      a1c$7.a[idx1$1] = elem;
      a2c$6.a[idx2$1] = a1c$7;
      a3c$5.a[idx3$1] = a2c$6;
      a4c$4.a[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, a4c$4, this.a1, this.a7, this.Y, this.L, this.S, this.R, this.Q, this.P, this.c, this.f);
    } else if ((index >= this.ac)) {
      var io$4 = ((index - this.ac) | 0);
      var a3$6 = this.a5;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.i();
      var a2$7 = a3c$6.a[idx3$2];
      var a2c$7 = a2$7.i();
      var a1$8 = a2c$7.a[idx2$2];
      var a1c$8 = a1$8.i();
      a1c$8.a[idx1$2] = elem;
      a2c$7.a[idx2$2] = a1c$8;
      a3c$6.a[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, a3c$6, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, this.R, this.Q, this.P, this.c, this.f);
    } else if ((index >= this.am)) {
      var io$5 = ((index - this.am) | 0);
      var a2$8 = this.a4;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.i();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.i();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.b, this.am, a2c$8, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, this.R, this.Q, this.P, this.c, this.f);
    } else {
      var a1$10 = this.b;
      var a1c$10 = a1$10.i();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, this.R, this.Q, this.P, this.c, this.f);
    }
  } else {
    throw this.aR(index);
  }
});
$p.bk = (function(elem) {
  if ((this.c.a.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().eP(this.c, elem);
    var x$2 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, this.R, this.Q, this.P, x$1, x$2);
  } else if ((this.P.a.length < 31)) {
    var x$18 = $m_sci_VectorStatics$().F(this.P, this.c);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, this.R, this.Q, x$18, a, x$20);
  } else if ((this.Q.a.length < 31)) {
    var x$35 = $m_sci_VectorStatics$().F(this.Q, $m_sci_VectorStatics$().F(this.P, this.c));
    var x$36 = $m_sci_VectorStatics$().ad;
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$38 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, this.R, x$35, x$36, a$1, x$38);
  } else if ((this.R.a.length < 31)) {
    var x$52 = $m_sci_VectorStatics$().F(this.R, $m_sci_VectorStatics$().F(this.Q, $m_sci_VectorStatics$().F(this.P, this.c)));
    var x$53 = $m_sci_VectorStatics$().b6;
    var x$54 = $m_sci_VectorStatics$().ad;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$56 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, x$52, x$53, x$54, a$2, x$56);
  } else if ((this.S.a.length < 31)) {
    var x$69 = $m_sci_VectorStatics$().F(this.S, $m_sci_VectorStatics$().F(this.R, $m_sci_VectorStatics$().F(this.Q, $m_sci_VectorStatics$().F(this.P, this.c))));
    var x$70 = $m_sci_VectorStatics$().ci;
    var x$71 = $m_sci_VectorStatics$().b6;
    var x$72 = $m_sci_VectorStatics$().ad;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$74 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if ((this.L.a.length < 62)) {
    var x$86 = $m_sci_VectorStatics$().F(this.L, $m_sci_VectorStatics$().F(this.S, $m_sci_VectorStatics$().F(this.R, $m_sci_VectorStatics$().F(this.Q, $m_sci_VectorStatics$().F(this.P, this.c)))));
    var x$87 = $m_sci_VectorStatics$().fH;
    var x$88 = $m_sci_VectorStatics$().ci;
    var x$89 = $m_sci_VectorStatics$().b6;
    var x$90 = $m_sci_VectorStatics$().ad;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$92 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.el = (function(elem) {
  if ((this.am < 32)) {
    var x$1 = $m_sci_VectorStatics$().eQ(elem, this.b);
    var x$2 = ((1 + this.am) | 0);
    var x$3 = ((1 + this.ac) | 0);
    var x$4 = ((1 + this.a3) | 0);
    var x$5 = ((1 + this.a1) | 0);
    var x$6 = ((1 + this.Y) | 0);
    var x$7 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(x$1, x$2, this.a4, x$3, this.a5, x$4, this.a6, x$5, this.a7, x$6, this.L, this.S, this.R, this.Q, this.P, this.c, x$7);
  } else if ((this.ac < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var x$20 = $m_sci_VectorStatics$().B(this.b, this.a4);
    var x$21 = ((1 + this.ac) | 0);
    var x$22 = ((1 + this.a3) | 0);
    var x$23 = ((1 + this.a1) | 0);
    var x$24 = ((1 + this.Y) | 0);
    var x$25 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(a, 1, x$20, x$21, this.a5, x$22, this.a6, x$23, this.a7, x$24, this.L, this.S, this.R, this.Q, this.P, this.c, x$25);
  } else if ((this.a3 < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x$37 = $m_sci_VectorStatics$().ad;
    var x$39 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.a4), this.a5);
    var x$40 = ((1 + this.a3) | 0);
    var x$41 = ((1 + this.a1) | 0);
    var x$42 = ((1 + this.Y) | 0);
    var x$43 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(a$1, 1, x$37, 1, x$39, x$40, this.a6, x$41, this.a7, x$42, this.L, this.S, this.R, this.Q, this.P, this.c, x$43);
  } else if ((this.a1 < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var x$54 = $m_sci_VectorStatics$().ad;
    var x$56 = $m_sci_VectorStatics$().b6;
    var x$58 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.a4), this.a5), this.a6);
    var x$59 = ((1 + this.a1) | 0);
    var x$60 = ((1 + this.Y) | 0);
    var x$61 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(a$2, 1, x$54, 1, x$56, 1, x$58, x$59, this.a7, x$60, this.L, this.S, this.R, this.Q, this.P, this.c, x$61);
  } else if ((this.Y < 33554432)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var x$71 = $m_sci_VectorStatics$().ad;
    var x$73 = $m_sci_VectorStatics$().b6;
    var x$75 = $m_sci_VectorStatics$().ci;
    var x$77 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.a4), this.a5), this.a6), this.a7);
    var x$78 = ((1 + this.Y) | 0);
    var x$79 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(a$3, 1, x$71, 1, x$73, 1, x$75, 1, x$77, x$78, this.L, this.S, this.R, this.Q, this.P, this.c, x$79);
  } else if ((this.L.a.length < 62)) {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var x$88 = $m_sci_VectorStatics$().ad;
    var x$90 = $m_sci_VectorStatics$().b6;
    var x$92 = $m_sci_VectorStatics$().ci;
    var x$94 = $m_sci_VectorStatics$().fH;
    var x$96 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.b, this.a4), this.a5), this.a6), this.a7), this.L);
    var x$97 = ((1 + this.f) | 0);
    return new $c_sci_Vector6(a$4, 1, x$88, 1, x$90, 1, x$92, 1, x$94, 1, x$96, this.S, this.R, this.Q, this.P, this.c, x$97);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.eh = (function(f) {
  var x$1 = $m_sci_VectorStatics$().cc(this.b, f);
  var x$2 = $m_sci_VectorStatics$().ar(2, this.a4, f);
  var x$3 = $m_sci_VectorStatics$().ar(3, this.a5, f);
  var x$4 = $m_sci_VectorStatics$().ar(4, this.a6, f);
  var x$5 = $m_sci_VectorStatics$().ar(5, this.a7, f);
  var x$6 = $m_sci_VectorStatics$().ar(6, this.L, f);
  var x$7 = $m_sci_VectorStatics$().ar(5, this.S, f);
  var x$8 = $m_sci_VectorStatics$().ar(4, this.R, f);
  var x$9 = $m_sci_VectorStatics$().ar(3, this.Q, f);
  var x$10 = $m_sci_VectorStatics$().ar(2, this.P, f);
  var x$11 = $m_sci_VectorStatics$().cc(this.c, f);
  return new $c_sci_Vector6(x$1, this.am, x$2, this.ac, x$3, this.a3, x$4, this.a1, x$5, this.Y, x$6, x$7, x$8, x$9, x$10, x$11, this.f);
});
$p.co = (function() {
  return 11;
});
$p.cD = (function(idx) {
  switch (idx) {
    case 0: {
      return this.b;
      break;
    }
    case 1: {
      return this.a4;
      break;
    }
    case 2: {
      return this.a5;
      break;
    }
    case 3: {
      return this.a6;
      break;
    }
    case 4: {
      return this.a7;
      break;
    }
    case 5: {
      return this.L;
      break;
    }
    case 6: {
      return this.S;
      break;
    }
    case 7: {
      return this.R;
      break;
    }
    case 8: {
      return this.Q;
      break;
    }
    case 9: {
      return this.P;
      break;
    }
    case 10: {
      return this.c;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.bH = (function(suffix, k) {
  var suffix1b = $m_sci_VectorStatics$().eN(this.c, suffix);
  if ((suffix1b !== null)) {
    var x$2 = ((((this.f - this.c.a.length) | 0) + suffix1b.a.length) | 0);
    return new $c_sci_Vector6(this.b, this.am, this.a4, this.ac, this.a5, this.a3, this.a6, this.a1, this.a7, this.Y, this.L, this.S, this.R, this.Q, this.P, suffix1b, x$2);
  } else {
    return $c_sci_Vector.prototype.bH.call(this, suffix, k);
  }
});
$p.dJ = (function(elem) {
  return this.bk(elem);
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f))) {
    var io = ((index - this.Y) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.L.a.length) ? this.L.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.S.a.length) ? this.S.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.R.a.length) ? this.R.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.Q.a.length) ? this.Q.a[i3].a[i2].a[i1] : ((i2 < this.P.a.length) ? this.P.a[i2].a[i1] : this.c.a[i1])))));
    } else if ((index >= this.a1)) {
      var io$2 = ((index - this.a1) | 0);
      return this.a7.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.a3)) {
      var io$3 = ((index - this.a3) | 0);
      return this.a6.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.ac)) {
      var io$4 = ((index - this.ac) | 0);
      return this.a5.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.am)) {
      var io$5 = ((index - this.am) | 0);
      return this.a4.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.b.a[index];
    }
  } else {
    throw this.aR(index);
  }
});
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c8)));
}
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  c8: 1,
  ad: 1,
  ae: 1,
  a8: 1,
  x: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  v: 1,
  t: 1,
  w: 1,
  y: 1,
  r: 1,
  q: 1,
  C: 1,
  z: 1,
  s: 1,
  l: 1,
  U: 1,
  a: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.b9 = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.b9 = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.bl = (function() {
  return "IndexedSeq";
});
$p.j = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bd = (function(len) {
  var x = this.b9.m();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bf = (function(size) {
});
$p.bb = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.m = (function() {
  return this.b9.m();
});
$p.y = (function() {
  return this.b9.m();
});
$p.p0 = (function(x) {
  var this$1 = this.b9;
  var str = ("" + $cToS(x));
  this$1.n = (this$1.n + str);
  return this;
});
$p.v = (function() {
  return this.b9.n;
});
$p.mV = (function(xs) {
  if (false) {
    var this$3 = this.b9;
    var str = xs.rB;
    this$3.n = (("" + this$3.n) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.b9.mU(xs.bT);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.b9;
    var s = xs.b9;
    this$4.n = (("" + this$4.n) + s);
  } else {
    var ks = xs.y();
    if ((ks !== 0)) {
      var b = this.b9;
      if ((ks > 0)) {
        b.m();
      }
      var it = xs.j();
      while (it.l()) {
        var c = $uC(it.h());
        var str$1 = ("" + $cToS(c));
        b.n = (b.n + str$1);
      }
    }
  }
  return this;
});
$p.d = (function() {
  return (this.b9.m() === 0);
});
$p.bq = (function() {
  return $m_scm_IndexedSeq$();
});
$p.ba = (function() {
  return this.b9.n;
});
$p.aU = (function(elem) {
  return this.p0($uC(elem));
});
$p.eS = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).mV(coll);
});
$p.g1 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).mV(coll);
});
$p.e = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.b9.nd(i));
});
$p.t = (function(i) {
  return $bC(this.b9.nd(i));
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cn)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cn: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  a9: 1,
  M: 1,
  J: 1,
  H: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  aF: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.h3)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().hh($thiz);
  $thiz.c7 = buf.c7;
  $thiz.cU = buf.cU;
  $thiz.gL = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.gM = ((1 + $thiz.gM) | 0);
  if ($thiz.gL) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.gM = 0;
  this.c7 = null;
  this.cU = null;
  this.gL = false;
  this.c8 = 0;
  this.gM = 0;
  this.c7 = $m_sci_Nil$();
  this.cU = null;
  this.gL = false;
  this.c8 = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.bf = (function(size) {
});
$p.cx = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.j = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.c7.j(), new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.gM)));
});
$p.dQ = (function() {
  return $m_scm_ListBuffer$();
});
$p.t = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.c7, i);
});
$p.m = (function() {
  return this.c8;
});
$p.y = (function() {
  return this.c8;
});
$p.d = (function() {
  return (this.c8 === 0);
});
$p.oj = (function() {
  this.gL = (!this.d());
  return this.c7;
});
$p.p8 = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.c8 === 0)) {
    this.c7 = last1;
  } else {
    this.cU.aM = last1;
  }
  this.cU = last1;
  this.c8 = ((1 + this.c8) | 0);
  return this;
});
$p.hh = (function(xs) {
  var it = xs.j();
  if (it.l()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.h(), $m_sci_Nil$());
    this.c7 = last0;
    while (it.l()) {
      var last1 = new $c_sci_$colon$colon(it.h(), $m_sci_Nil$());
      last0.aM = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.c8 = len;
    this.cU = last0;
  }
  return this;
});
$p.oY = (function(xs) {
  var it = xs.j();
  if (it.l()) {
    var fresh = new $c_scm_ListBuffer().hh(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.c8 === 0)) {
      this.c7 = fresh.c7;
    } else {
      this.cU.aM = fresh.c7;
    }
    this.cU = fresh.cU;
    this.c8 = ((this.c8 + fresh.c8) | 0);
  }
  return this;
});
$p.bl = (function() {
  return "ListBuffer";
});
$p.bb = (function(elems) {
  return this.oY(elems);
});
$p.aU = (function(elem) {
  return this.p8(elem);
});
$p.ba = (function() {
  return this.oj();
});
$p.e = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.c7, i);
});
$p.bq = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cm)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  cm: 1,
  aS: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  aT: 1,
  J: 1,
  H: 1,
  ax: 1,
  s: 1,
  l: 1,
  a9: 1,
  M: 1,
  U: 1,
  a: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.dt = 0;
  $thiz.ds = initialElements;
  $thiz.aO = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.dt = 0;
  this.ds = null;
  this.aO = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.cx = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.j = (function() {
  return this.ry().j();
});
$p.bd = (function(len) {
  var x = this.aO;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function() {
  return this.aO;
});
$p.j3 = (function(n) {
  this.ds = $m_scm_ArrayBuffer$().od(this.ds, this.aO, n);
});
$p.bf = (function(size) {
  if (((size > this.aO) && (size >= 1))) {
    this.j3(size);
  }
});
$p.t = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().g4(n, (((-1) + this.aO) | 0));
  }
  if ((hi > this.aO)) {
    throw $m_scg_CommonErrors$().g4((((-1) + hi) | 0), (((-1) + this.aO) | 0));
  }
  return this.ds.a[n];
});
$p.rw = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().g4(index, (((-1) + this.aO) | 0));
  }
  if ((hi > this.aO)) {
    throw $m_scg_CommonErrors$().g4((((-1) + hi) | 0), (((-1) + this.aO) | 0));
  }
  this.dt = ((1 + this.dt) | 0);
  this.ds.a[index] = elem;
});
$p.m = (function() {
  return this.aO;
});
$p.ry = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => this.dt)));
});
$p.dQ = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.p5 = (function(elem) {
  this.dt = ((1 + this.dt) | 0);
  var newSize = ((1 + this.aO) | 0);
  this.j3(newSize);
  this.aO = newSize;
  this.rw((((-1) + this.aO) | 0), elem);
  return this;
});
$p.mQ = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aO;
    if ((elemsLength > 0)) {
      this.dt = ((1 + this.dt) | 0);
      this.j3(((this.aO + elemsLength) | 0));
      $m_s_Array$().fY(elems.ds, 0, this.ds, this.aO, elemsLength);
      this.aO = ((this.aO + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bl = (function() {
  return "ArrayBuffer";
});
$p.by = (function(xs, start, len) {
  var srcLen = this.aO;
  var destLen = $m_jl_reflect_Array$().cb(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().fY(this.ds, 0, xs, start, copied);
  }
  return copied;
});
$p.bb = (function(elems) {
  return this.mQ(elems);
});
$p.aU = (function(elem) {
  return this.p5(elem);
});
$p.bq = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.e = (function(v1) {
  return this.t((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  c9: 1,
  aS: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  aT: 1,
  J: 1,
  H: 1,
  ax: 1,
  cl: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  s: 1,
  l: 1,
  U: 1,
  a: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.dE = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.dE = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bf = (function(size) {
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.j = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bd = (function(len) {
  var x = (this.dE.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cx = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.dQ = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.t = (function(index) {
  return this.dE[index];
});
$p.m = (function() {
  return (this.dE.length | 0);
});
$p.y = (function() {
  return (this.dE.length | 0);
});
$p.bU = (function() {
  return "WrappedArray";
});
$p.ba = (function() {
  return this;
});
$p.aU = (function(elem) {
  this.dE.push(elem);
  return this;
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  return this.dE[index];
});
$p.bq = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  hV: 1,
  aS: 1,
  L: 1,
  p: 1,
  i: 1,
  f: 1,
  b: 1,
  h: 1,
  c: 1,
  g: 1,
  m: 1,
  j: 1,
  e: 1,
  k: 1,
  d: 1,
  N: 1,
  K: 1,
  O: 1,
  I: 1,
  A: 1,
  aT: 1,
  J: 1,
  H: 1,
  ax: 1,
  s: 1,
  l: 1,
  R: 1,
  r: 1,
  q: 1,
  S: 1,
  cl: 1,
  M: 1,
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
