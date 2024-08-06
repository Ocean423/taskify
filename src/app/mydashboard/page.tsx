'use client'

import DashboardCard from '@/components/DashboardCard'
import DashboardLayout from '@/layouts/DashboardLayout'
import RootHeader from '@/layouts/RootHeader'

import InvitationList from './components/InvitationList'

/**
 * @JuhyeokC
 * TEST용 더미 배열 생성
 */
const DASHBOARD_TEMP_ARRAY: string[] = Array.from(
  { length: 5 },
  (_, index) => `대시보드-${index + 1}`
)

export default function MyDashboard() {
  return (
    <DashboardLayout>
      <RootHeader border>
        <RootHeader.Title>내 대시보드</RootHeader.Title>
        <RootHeader.Features>
          {/**
           * @JuhyeokC
           * @todo
           * 기능 컴포넌트 구현 필요
           */}
          <div className='flex gap-9 px-6'>
            <p>관리</p>
            <p>초대하기</p>
          </div>
          <div className='flex gap-2 border-l-[1px] border-[#d9d9d9] px-6'>
            <p>아바타</p>
            <span>이름</span>
          </div>
        </RootHeader.Features>
      </RootHeader>
      <DashboardLayout.Container>
        <DashboardLayout.Sidebar>
          {/**
           * @JuhyeokC
           * @todo
           * 사이드 컴포넌트 구현 필요
           */}
          {DASHBOARD_TEMP_ARRAY.map((item, index) => {
            return (
              <DashboardCard type='side' key={`dashboard-side-${index}`}>
                {item}
              </DashboardCard>
            )
          })}
        </DashboardLayout.Sidebar>
        <DashboardLayout.Content className='pd-10 grid max-w-5xl gap-4 p-10'>
          {/**
           * @JuhyeokC
           * @todo
           * 나의 대시보드 컴포넌트 구현 필요
           */}

          <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <DashboardCard type='add'>새로운 대시보드</DashboardCard>

            {DASHBOARD_TEMP_ARRAY.map((item, index) => {
              return (
                <DashboardCard type='card' key={`dashboard-card-${index}`}>
                  {item}
                </DashboardCard>
              )
            })}

            <div
              style={{
                gridColumn: '1/-1',
                textAlign: 'right',
              }}
            >
              <p>대시보드 리스트 페이지네이션 컴포넌트</p>
            </div>
          </section>

          <section className='rounded-lg bg-white'>
            <div className='px-7 pb-6 pt-8'>
              <h2 className='text-2xl font-semibold'>초대받은 대시보드</h2>
            </div>
            <InvitationList />
          </section>
        </DashboardLayout.Content>
      </DashboardLayout.Container>
    </DashboardLayout>
  )
}
