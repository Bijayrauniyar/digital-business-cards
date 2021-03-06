/*
 * Copyright 2018 DoubleDutch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'
import ReactNative, { Text, View, ActivityIndicator } from 'react-native'
import { translate as t } from '@doubledutch/rn-client'

const LoadingView = ({ logInFailed }) => (
  <View style={s.container}>
    {logInFailed ? (
      <Text style={s.errorText}>{t('error_connecting')}</Text>
    ) : (
      <ActivityIndicator size="large" color="white" />
    )}
  </View>
)

export default LoadingView

const s = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  errorText: {
    fontSize: 18,
    color: '#4B4B4B',
  },
})
